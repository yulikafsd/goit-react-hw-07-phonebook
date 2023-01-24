import { Box } from "styles/Box";
import { ContactForm } from "components/contactForm/ContactForm";
import { ContactList } from "components/contactList/ContactList";
import { Filter } from "components/filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectOperation } from "redux/selectors";
import { ToastContainer } from 'react-toastify';

export function App() {
  const error = useSelector(selectError);
  const operation = useSelector(selectOperation);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchContacts(signal))

    return () => {
      controller.abort();
    };
  }, [dispatch]);
    
  return (
    <Box pt={3} pb={3} pr={4} pl={4} textAlign="center" width="300px" ml="auto" mr="auto">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {operation === 'fetch' && <p>Loading contacts...</p>}
      {error && error !== 'canceled' && <p>Oops, {error}. Try reload the page.</p>}
      {!error && <ContactList />}
      <ToastContainer/>
    </Box>
    );
}
