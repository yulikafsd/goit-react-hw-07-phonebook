import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Label,
  StyledField,
  StyledError,
  Button,
} from 'components/contactForm';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

const initialValues = {
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

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit({ ...values, id: nanoid() });
    resetForm();
  };

  render() {
    const { handleSubmit, nameInputId, numberInputId } = this;

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
  }
}
