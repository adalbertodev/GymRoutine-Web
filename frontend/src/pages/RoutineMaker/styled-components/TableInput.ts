import styled from 'styled-components';

export const TableInput = styled.input`
  width: 100%;
  text-align: center;
  border-top: 1px solid black;
  border-right: 0px solid black;
  border-bottom: 1px solid black;
  border-left: 0px solid black;
  background-color: inherit;
  color: inherit;
  padding: 0.3rem;

  &:first-child {
    border-left: 1px solid black;
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-right: 1px solid black;
    border-radius: 0 5px 5px 0;
  }
`;
