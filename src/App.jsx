import { Box } from "styles";
import { useEffect, useState } from "react";
import { ContactForm } from "components/contactForm";
import { ContactList } from "components/contactList";
import { Filter } from "components/filter";

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const onSubmitForm = (newContact) => {
    const isContact = contacts.find(contact =>
      contact.name.toLowerCase() === newContact.name.toLowerCase());
    isContact
      ? alert(`Contact ${newContact.name} already exists. Please, choose another name`)
      : setContacts([...contacts, newContact]);
  }

  const onFilterChange = (e) => {
    const { value } = e.currentTarget; 
    setFilter(value.toLowerCase());
  };

  const filterNames = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    });
  }

  const onClickDelete = (contactId) => {
    setContacts(contacts =>
      contacts.filter(contact => {
        return contact.id !== contactId
      }))
  }

  const searchResults = filterNames();
    
  return (
    <Box pt={3} pb={3} pr={4} pl={4} textAlign="center" width="300px" ml="auto" mr="auto">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={ onSubmitForm } />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={onFilterChange} />
      <ContactList contacts={searchResults} onClick={onClickDelete} />
    </Box>
    );
}
