import PropTypes from 'prop-types';
import { Box } from 'styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Item, Text, Button } from 'components/contactList';

export function ContactList({ contacts, onClick }) {
  return contacts.length > 0 ? (
    <Box as="ul" textAlign="left">
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>{`${name}: ${number}`}</Text>
            <Button type="button" onClick={() => onClick(id)}>
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
