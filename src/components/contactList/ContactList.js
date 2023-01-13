import { Box } from 'styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Text, Button } from 'components/contactList';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterNames = () => {
    if (filter.trim().length === 0) {
      return contacts;
    } else {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    }
  };

  const handleClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  const searchResults = filterNames();

  return searchResults.length > 0 ? (
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
  ) : (
    <Box as="p" fontSize={14}>
      No contacts
    </Box>
  );
}
