import { TableCol } from '../styled-components/TableCol';
import { TableInput } from '../styled-components/TableInput';

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
    <TableCol>
      <TableInput
        type='text'
        // value={
        //   props.columnRow?.exercise !== undefined
        //     ? props.columnRow.exercise
        //     : ''
        // }
      />

      <TableInput
        type='text'
        // value={
        //   props.columnRow?.series !== undefined ? props.columnRow.series : ''
        // }
      />

      <TableInput
        type='text'
        // value={
        //   props.columnRow?.repetitions !== undefined
        //     ? props.columnRow.repetitions
        //     : ''
        // }
      />

      <TableInput
        type='text'
        // value={
        //   props.columnRow?.repetitions !== undefined
        //     ? props.columnRow.weight + ' kg'
        //     : ''
        // }
      />
    </TableCol>
  );
};

export default RoutineColumn;
