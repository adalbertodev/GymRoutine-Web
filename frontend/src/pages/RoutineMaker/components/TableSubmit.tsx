import { memo } from 'react';
import { SaveButton, SubmitBox } from '../styled-components/TableSubmit';
import { downloadHTML } from '../helpers/downloadHTML';
import { getRmExercises } from '../../../services/RmExerciseAPI';
import { useTable } from '../hooks/useTable';
import { addEmptyRow, updateRmFields } from '../contexts/tableActions';

const TableSubmit: React.FC = memo(() => {
  // console.log('TableSubmit');

  const { table, dispatch } = useTable();

  const handleAddRow = () => {
    dispatch(addEmptyRow());
  };

  const handleCalculateRm = () => {
    getRmExercises().then((rmExercises) => {
      dispatch(updateRmFields(rmExercises));
      console.log(table);
    });
  };

  return (
    <SubmitBox>
      <SaveButton variant='contained' color='secondary' onClick={handleAddRow}>
        Añadir
      </SaveButton>

      <SaveButton
        variant='contained'
        color='primary'
        onClick={handleCalculateRm}
      >
        Calcular
      </SaveButton>

      <SaveButton
        variant='contained'
        color='success'
        onClick={(e) => downloadHTML('routineTable')}
      >
        Guardar
      </SaveButton>
    </SubmitBox>
  );
});

export default TableSubmit;
