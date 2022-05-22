import styled from 'styled-components';
import { RoutineTextField } from '../components/inputs/RoutineTextField';
import { colorByMuscle } from '../utils/colorByMuscle';

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
  border-collapse: separate;
  border-spacing: 0;
  min-width: 700px;
  table-layout: fixed;

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
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.015em;
  padding: 0.5rem 0;
  text-align: center;
  vertical-align: inherit;

  tr:first-child & {
    font-weight: bold;
    padding: 1rem;
  }

  tr:last-child & {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
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
    border-bottom: 0;
  }

  /* display: grid;
  grid-template-columns: repeat(5, 1fr); */
`;

export const StyledCellGrid = styled.div`
  display: grid;
  grid-template-columns: 57.5% 10% 12.5% 20%;
`;

interface TableCellProps {
  muscle: string | undefined;
}

export const TableCell = styled.td<TableCellProps>`
  background-color: ${({ muscle }) => muscle && colorByMuscle.get(muscle)};
  /* border-bottom: 1px solid rgba(224, 224, 224, 1); */
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.87);
  height: 100%;
  display: table-cell;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.43px;
  letter-spacing: 0.01071em;
  text-align: center;
  vertical-align: inherit;

  &:first-of-type {
    border-left: 2px solid rgba(0, 0, 0, 0.5);
  }

  &:last-of-type {
    border-right: 2px solid rgba(0, 0, 0, 0.5);
  }

  & input {
    text-align: center;
  }
`;

export const StyledTextField = styled(RoutineTextField)`
  height: 100%;

  & > div {
    font-size: ${({ fontSize }) => fontSize && fontSize + 'px'};
    height: 100%;
  }

  & > div:before {
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    height: 100%;
  }

  & input {
    padding: 4px 4px 5px 4px;
    /* height: 100%; */
  }

  &:first-of-type > div::before {
    border-left: 0;
  }

  td > div > &:last-of-type > div:before {
    border-right: 0;
  }
`;
