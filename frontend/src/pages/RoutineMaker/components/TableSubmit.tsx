import React from 'react';
import { SaveButton } from '../styled-components/SaveButton';
import { downloadHTML } from '../helpers/downloadHTML';
import { SubmitBox } from '../styled-components/SubmitBox';

const TableSubmit: React.FC = () => {
  return (
    <SubmitBox>
      <SaveButton
        variant='contained'
        color='success'
        onClick={(e) => downloadHTML('routineTable')}
      >
        Guardar
      </SaveButton>
    </SubmitBox>
  );
};

export default TableSubmit;
