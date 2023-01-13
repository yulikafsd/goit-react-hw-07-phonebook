import { Box } from "styles";
import { ContactForm } from "components/contactForm";
import { ContactList } from "components/contactList";
import { Filter } from "components/filter";

export function App() {
    
  return (
    <Box pt={3} pb={3} pr={4} pl={4} textAlign="center" width="300px" ml="auto" mr="auto">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Box>
    );
}
