import styled from 'styled-components';

export const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  outline: 0;
  vertical-align: middle;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &:last-child td {
    border: 0;
  }

  /* display: grid;
  grid-template-columns: repeat(5, 1fr); */
`;
