import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: all 150ms linear;

  &:hover {
    scale: 1.3;
  }
`;

export const Text = styled.p`
  display: inline-block;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
