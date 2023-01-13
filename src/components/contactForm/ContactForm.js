import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'components/contactForm';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isContact = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase().trim()
    );
    isContact
      ? alert(
          `Contact ${values.name} already exists. Please, choose another name`
        )
      : dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Label htmlFor={nameInputId}>Name</Label>
        <StyledField type="text" name="name" required id={nameInputId} />
        <StyledError name="name" component="div" />
        <Label htmlFor={numberInputId}>Number</Label>
        <StyledField type="tel" name="number" required id={numberInputId} />
        <StyledError name="number" component="div" />
        <Button type="submit">Add Contact</Button>
      </Form>
    </Formik>
  );
};
