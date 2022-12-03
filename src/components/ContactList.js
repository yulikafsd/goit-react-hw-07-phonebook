import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'styles';
import { Item, Text, Button } from 'components/ContactList.styled';
import { AiFillCloseCircle } from 'react-icons/ai';

export class ContactList extends Component {
  handleClick = id => {
    this.props.onClick(id);
  };

  render() {
    const { handleClick } = this;
    const { contacts } = this.props;

    return contacts.length > 0 ? (
      <Box as="ul" textAlign="left">
        {contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Text>{`${name}: ${number}`}</Text>
              <Button type="button" onClick={() => handleClick(id)}>
                <AiFillCloseCircle size="18px" color="white" fill="#00bcd5" />
              </Button>
            </Item>
          );
        })}
      </Box>
    ) : (
      <Box as="p" fontSize={14}>
        No contacts
      </Box>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
