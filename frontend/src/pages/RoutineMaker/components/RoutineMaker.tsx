import { memo } from 'react';
import { RoutineTable } from './RoutineTable';
import { RoutineMakerContainer } from '../styled-components/RoutineMaker';
import { TableSettings } from './TableSettings';
import { TableSubmit } from './TableSubmit';
import User from '../../../models/User';
import { useTable } from '../hooks/useTable';

interface RoutineMakerProps {
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export const RoutineMaker: React.FC<RoutineMakerProps> = memo(
  ({ activeUserState }) => {
    const { table } = useTable();

    return (
      <RoutineMakerContainer>
        <TableSettings activeUserState={activeUserState} />
        <RoutineTable rows={table.rows} />
        <TableSubmit />
      </RoutineMakerContainer>
    );
  }
);
