import React, { useContext } from 'react';
import { SaveButton, SubmitBox } from '../styled-components/TableSubmit';
import { downloadHTML } from '../helpers/downloadHTML';
import { TableContext } from '../contexts/TableContext';
import RmExercise from '../../../models/RmExercise';

interface RmExercises {
  rmExercises?: RmExercise[];
}

const TableSubmit: React.FC<RmExercises> = React.memo(({ rmExercises }) => {
  // console.log('TableSubmit');

  const { table, dispatch } = useContext(TableContext);

  const handleAddRow = () => {
    dispatch({
      type: 'addRow',
      payload: []
    });
  };

  const handleCalculateRm = () => {
    dispatch({
      type: 'calculateRm',
      payload: rmExercises || [
        {
          user: {
            id: '933ceebb-c7e4-471f-87c9-054a8725b4cd',
            name: 'Adalberto',
            password: ''
          },
          exercise: {
            id: 'PRBC',
            label: 'Press Banca',
            muscle: 'PCT',
            bar: 20
          },
          rm: 50
        }
      ]
    });
    console.log(table);
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
