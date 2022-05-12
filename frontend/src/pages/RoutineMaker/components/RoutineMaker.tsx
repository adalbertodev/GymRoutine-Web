import { memo } from 'react';
import { RoutineTable } from './RoutineTable';
import { RoutineMakerContainer } from '../styled-components/RoutineMaker';
import { TableSettings } from './TableSettings';
import { TableHandler } from './TableHandler';
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
        <TableHandler />
      </RoutineMakerContainer>
    );
  }
);
