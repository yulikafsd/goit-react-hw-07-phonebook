import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loadMessage = contacts =>
  toast.success(`There are ${contacts.length} contacts in your phonebook`);

export const addMessage = name =>
  toast.success(`The contact ${name} was added!`);

export const deleteMessage = name =>
  toast.success(`The contact ${name} was deleted!`);

export const emptyListMessage = toast.info(
  `There are no contacts in your phonebook`
);

export const changeNameMessage = name =>
  toast.warn(`Contact ${name} already exists. Please, choose another name`);

export const errorMessage = error =>
  toast.error(`Something went wrong. ${error}. Try reload the page`);
