import { Box } from 'styles';

export const ContactList = ({ contacts }) => {
  return contacts.length > 0 ? (
    <Box as="ul" textAlign="left">
      {contacts.map(({ id, name, number }) => {
        return <li key={id}>{`${name}: ${number}`}</li>;
      })}
    </Box>
  ) : (
    <Box fontSize={14}>
      <p>Contact not found</p>
      <p>Try another search name</p>
    </Box>
  );
};
