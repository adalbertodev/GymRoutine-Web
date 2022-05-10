import { memo } from 'react';
import { RoutineTable } from './RoutineTable';
import { RoutineMakerContainer } from '../styled-components/RoutineMaker';
import { TableSettings } from './TableSettings';
import { TableSubmit } from './TableSubmit';
import User from '../../../models/User';

interface RoutineMakerProps {
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export const RoutineMaker: React.FC<RoutineMakerProps> = memo(
  ({ activeUserState }) => {
    return (
      <RoutineMakerContainer>
        <TableSettings activeUserState={activeUserState} />
        <RoutineTable />
        <TableSubmit />
      </RoutineMakerContainer>
    );
  }
);
