import { memo } from 'react';
import { TableConfiguratorContainer } from '../styled-components/Configurator';
import User from '../../../models/User';
import { UserSelect } from './inputs/UserSelect';
import { TemplateSelect } from './inputs/TemplateSelect';

interface TableConfiguratorProps {
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export const TableConfigurator: React.FC<TableConfiguratorProps> = memo(
  ({ activeUserState }) => {
    return (
      <TableConfiguratorContainer>
        <UserSelect activeUserState={activeUserState} />

        <TemplateSelect />
      </TableConfiguratorContainer>
    );
  }
);
