import { Box } from 'styles/Box';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import {
  Item,
  Wrapper,
  Text,
  Number,
  Button,
} from 'components/contactList/ContactList.styled';
import {
  selectError,
  selectFilteredContacts,
  selectIsDeleting,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteContact } from 'redux/operations';

export function ContactList() {
  const isDeleting = useSelector(selectIsDeleting);
  const error = useSelector(selectError);
  const searchResults = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const [contactId, setContactId] = useState('');

  const handleClick = contactId => {
    dispatch(deleteContact(contactId));
    setContactId(contactId);
  };

  useEffect(() => {
    if (!isDeleting && contactId !== '') {
      setContactId('');
    }
  }, [contactId, isDeleting]);

  return (
    <div>
      {error && (
        <Box as="p" fontSize={14}>
          Oops, {error}. Try reloading the page.
        </Box>
      )}
      {searchResults.length > 0 && (
        <Box as="ul" textAlign="left">
          {searchResults.map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Wrapper>
                  <Text>{name}</Text>
                  <Number>{number}</Number>
                </Wrapper>
                <Button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => handleClick(id)}
                >
                  {isDeleting && contactId === id ? (
                    <BiLoaderCircle size="20px" color="white" fill="#00bcd5" />
                  ) : (
                    <AiFillCloseCircle
                      size="20px"
                      color="white"
                      fill="#00bcd5"
                    />
                  )}
                </Button>
              </Item>
            );
          })}
        </Box>
      )}
      {!isDeleting && !error && searchResults.length === 0 && (
        <Box as="p" fontSize={14}>
          No contacts
        </Box>
      )}
    </div>
  );
}
