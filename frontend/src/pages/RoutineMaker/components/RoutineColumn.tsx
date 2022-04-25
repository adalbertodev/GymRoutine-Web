import { TextField } from '@mui/material';
import { TableCell } from '../styled-components/Table/TableCell';

interface columnRow {
  columnRow?: column;
}

export interface column {
  exercise?: string;
  series?: string;
  repetitions?: string;
  weight?: string;
}

const RoutineColumn: React.FC<columnRow> = (props) => {
  return (
    <TableCell>
      <div className='StyledCellGrid'>
        <TextField
          id='standard-basic'
          variant='standard'
          // value={
          //   props.columnRow?.exercise !== undefined
          //     ? props.columnRow.exercise
          //     : ''
          // }
        />

        <TextField
          id='standard-basic'
          variant='standard'
          // value={
          //   props.columnRow?.series !== undefined ? props.columnRow.series : ''
          // }
        />

        <TextField
          id='standard-basic'
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.repetitions
          //     : ''
          // }
        />

        <TextField
          id='standard-basic'
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.weight + ' kg'
          //     : ''
          // }
        />
      </div>
    </TableCell>
  );
};

export default RoutineColumn;
