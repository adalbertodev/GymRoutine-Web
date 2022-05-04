import { TextField } from '@mui/material';
import styled from 'styled-components';

export const TableContainer = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgb(0, 0, 0, 0.12);
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 700px;

  /* width: 80%;
  text-align: center;
  margin: auto;
  background-color: var(--table-primary);
  color: var(--font-primary); */
`;

export const TableHead = styled.thead`
  display: table-header-group;

  /* font-size: 1.5rem;
  font-weight: bold;

  margin-bottom: 0.3rem; */
`;

export const TableHeadCell = styled.th`
  background-color: #000;
  color: #fff;
  display: table-cell;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.015em;
  padding: 0.5rem 0;
  text-align: center;
  vertical-align: inherit;

  tr:first-child & {
    padding: 1rem;
  }

  tr:last-child & {
    border-bottom: 1px solid rgba(224, 224, 224, 1);
  }
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

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

export const StyledCellGrid = styled.div`
  display: grid;
  grid-template-columns: 60% 10% 10% 20%;
`;

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

export const StyledTextField = styled(TextField)`
  & > div:before {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
  }

  &:first-of-type > div::before {
    border-left: 1px solid rgba(0, 0, 0, 0.5);
  }

  td > div > &:last-of-type > div:before {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
`;
