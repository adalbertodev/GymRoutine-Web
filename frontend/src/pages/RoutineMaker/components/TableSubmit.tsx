import React, { useContext } from 'react';
import { SaveButton, SubmitBox } from '../styled-components/TableSubmit';
import { downloadHTML } from '../helpers/downloadHTML';
import { TableContext } from '../contexts/TableContext';
import { getRmExercises } from '../../../services/RmExerciseAPI';

const TableSubmit: React.FC = React.memo(() => {
  // console.log('TableSubmit');

  const { table, dispatch } = useContext(TableContext);

  const handleAddRow = () => {
    dispatch({
      type: 'addRow',
      payload: []
    });
  };

  const handleCalculateRm = () => {
    getRmExercises().then((rmExercises) => {
      dispatch({
        type: 'calculateRm',
        payload: rmExercises || []
      });
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
