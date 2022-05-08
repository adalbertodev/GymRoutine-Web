import RoutineTable from './components/Table/RoutineTable';
import { RoutineMakerContainer } from './styled-components/RoutineMaker';
import TableSettings from './components/TableSettings';
import TableSubmit from './components/TableSubmit';
import { useState } from 'react';
import User from '../../models/User';
import { TableProvider } from './contexts/TableProvider';

const RoutineMaker: React.FC = () => {
  const [activeUser, setActiveUser] = useState<User>();

  // const url =
  //   process.env.REACT_APP_API_URL +
  //   `rmExercises/${activeUser ? activeUser.id : ''}`;

  return (
    <TableProvider>
      <RoutineMakerContainer>
        <TableSettings activeUserState={[activeUser, setActiveUser]} />
        <RoutineTable />
        <TableSubmit />
      </RoutineMakerContainer>
    </TableProvider>
  );
};

export default RoutineMaker;
