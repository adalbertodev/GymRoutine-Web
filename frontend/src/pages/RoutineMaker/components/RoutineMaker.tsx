import { memo } from 'react';
import { RoutineTable } from './RoutineTable';
import { RoutineMakerContainer } from '../styled-components/RoutineMaker';
import { TableConfigurator } from './TableConfigurator';
import { TableHandler } from './TableHandler';
import User from '../../../models/User';
import { AddRowButton } from './inputs/AddRowButton';

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
        <TableConfigurator activeUserState={activeUserState} />
        <RoutineTable />
        <AddRowButton />
        <TableHandler />
      </RoutineMakerContainer>
    );
  }
);
