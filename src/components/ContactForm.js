import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Label, Input, Button } from 'components/ContactForm.styled';

const initialState = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = { ...initialState };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { handleSubmit, handleChange, nameInputId, numberInputId } = this;
    const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
          id={nameInputId}
        />
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
          id={numberInputId}
        />
        <Button type="submit">Add Contact</Button>
      </form>
    );
  }
}
