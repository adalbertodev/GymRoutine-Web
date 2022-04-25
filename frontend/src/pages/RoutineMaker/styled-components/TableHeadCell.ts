import styled from 'styled-components';

export const TableHeadCell = styled.th`
  background-color: #000;
  color: #fff;
  display: table-cell;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.01071em;
  padding: 0.5rem;
  text-align: center;
  vertical-align: inherit;

  tr:first-child & {
    padding: 1rem;
  }

  tr:last-child & {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
`;
