import styled from 'styled-components';

export const TableCell = styled.td`
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  color: rgba(0, 0, 0, 0.87);
  display: table-cell;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  padding: 16px;
  text-align: center;
  vertical-align: inherit;

  max-width: 20%;
  padding: 0;

  & input {
    text-align: center;
  }
`;
