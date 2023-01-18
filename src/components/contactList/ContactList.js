import { Box } from 'styles/Box';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Text, Button } from 'components/contactList/ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const searchResults = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      {error && <p>Oops, {error}. Try reloading the page.</p>}
      {isLoading && !error && <p>Loading contacts...</p>}
      {searchResults.length > 0 && (
        <Box as="ul" textAlign="left">
          {searchResults.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Text>{`${name}: ${number}`}</Text>
                <Button type="button" onClick={() => handleClick(id)}>
                  <AiFillCloseCircle size="18px" color="white" fill="#00bcd5" />
                </Button>
              </Item>
            );
          })}
        </Box>
      )}
      {!isLoading && !error && searchResults.length === 0 && (
        <Box as="p" fontSize={14}>
          No contacts
        </Box>
      )}
    </div>
  );
}
