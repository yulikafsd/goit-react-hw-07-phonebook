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
  selectOperation,
} from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactList() {
  const operation = useSelector(selectOperation);
  const error = useSelector(selectError);
  const searchResults = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleClick = contactId => {
    dispatch(deleteContact(contactId));
  };

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
                  disabled={operation === id}
                  onClick={() => handleClick(id)}
                >
                  {operation === id ? (
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
      {operation !== 'fetch' && !error && searchResults.length === 0 && (
        <Box as="p" fontSize={14}>
          No contacts
        </Box>
      )}
    </div>
  );
}
