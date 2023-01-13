import { Box } from "styles/Box";
import { ContactForm } from "components/contactForm/ContactForm";
import { ContactList } from "components/contactList/ContactList";
import { Filter } from "components/filter/Filter";

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
