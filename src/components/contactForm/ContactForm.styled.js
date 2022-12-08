import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1;
`;

export const Input = styled.input`
  display: block;
  width: 236px;
  line-height: 1;

  &:last-of-type {
    margin-bottom: 20px;

`;

export const StyledField = styled(Field)`
  display: block;
  width: 236px;
  line-height: 1;
`;

export const StyledError = styled(ErrorMessage)`
  font-size: 10px;
  font-style: italic;
  text-align: left;
  line-height: 1;
  color: red;
`;

export const Button = styled.button`
  display: block;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background-color: #00bcd5;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #00a6bc;
  }
`;
