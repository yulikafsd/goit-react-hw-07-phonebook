import { nanoid } from 'nanoid';
import { Box } from 'styles';
import { Label, Input } from 'components/filter';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filterInputId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    const { value } = e.currentTarget;

    if (value && value.length > 0) {
      const normalisedValue = value.toLowerCase();
      dispatch(changeFilter(normalisedValue));
    } else {
      dispatch(changeFilter(''));
    }
  };

  return (
    <Box as="form" onSubmit={e => e.preventDefault()}>
      <Label htmlFor={filterInputId}>Find contact by name:</Label>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        value={filter}
        id={filterInputId}
      />
    </Box>
  );
};
