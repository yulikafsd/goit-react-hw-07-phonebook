import { Box } from "styles";
import { Component } from "react";
import { ContactForm, ContactList } from "components";

export class App extends Component {  

  render() {
  return (
    <Box>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
      </Box>
    );
}
};
