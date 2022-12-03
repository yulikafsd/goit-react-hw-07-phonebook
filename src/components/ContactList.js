import { Box } from 'styles';
import { Item, Text, Button } from 'components/ContactList.styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export const ContactList = ({ contacts }) => {
  return contacts.length > 0 ? (
    <Box as="ul" textAlign="left">
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>{`${name}: ${number}`}</Text>
            <Button type="button">
              <AiFillCloseCircle size="18px" color="white" fill="#00bcd5" />
            </Button>
          </Item>
        );
      })}
    </Box>
  ) : (
    <Box fontSize={14}>
      <p>Contact not found</p>
      <p>Try another search name</p>
    </Box>
  );
};
