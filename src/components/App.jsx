import { Box } from "styles";
import { Component } from "react";
import { ContactForm, ContactList, Filter } from "components";

export class App extends Component {  

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  onSubmitForm = (contact) => {
    const { contacts } = this.state;
    this.setState({contacts: [...contacts, contact]});
  }

  onFilterChange = (e) => {
    const { name, value} = e.currentTarget; 
    this.setState({[name]: value});
  };

  filterNames = () => {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalisedFilter);
    });
  }

  render() {
    const { filter } = this.state;
    const { onSubmitForm, onFilterChange, filterNames } = this;
 
    const searchResults = filterNames();
    
  return (
    <Box pt={3} pb={3} pr={4} pl={4} textAlign="center" width="300px">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={ onSubmitForm } />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList contacts={searchResults} />
    </Box>
    );
}
};
