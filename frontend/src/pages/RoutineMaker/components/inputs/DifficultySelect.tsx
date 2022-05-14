import { SelectChangeEvent } from '@mui/material';
import { memo } from 'react';
import { changeDifficulty } from '../../contexts/tableActions';
import { useTable } from '../../hooks/useTable';
import { ConfiguratorSelect } from './ConfiguratorSelect';

interface DiffcultySelectProps {
  onChange?: (e: SelectChangeEvent<string>) => void;
}

export const DifficultySelect: React.FC<DiffcultySelectProps> = memo(
  ({ onChange }) => {
    const { tableState, dispatch } = useTable();
    const { difficulty } = tableState;

    const dfficulties = [
      { id: '543212345', name: 5 },
      { id: '4321234', name: 4 },
      { id: '32123', name: 3 },
      { id: '212', name: 2 },
      { id: '111', name: 1 }
    ];

    const handleChange = (e: SelectChangeEvent<string>) => {
      const newDifficulty = parseInt(e.target.value);
      dispatch(changeDifficulty(newDifficulty));
    };

    return (
      <ConfiguratorSelect
        styles={{ m: 1, minWidth: 80, textAlign: 'center' }}
        label='Dfficulty'
        value={difficulty}
        options={dfficulties}
        onChange={onChange ? onChange : handleChange}
      />
    );
  }
);
