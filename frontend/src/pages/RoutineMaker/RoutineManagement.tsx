import { useState } from 'react';
import User from '../../models/User';
import { TableProvider } from './contexts/TableProvider';
import { RoutineMaker } from './components/RoutineMaker';

export const RoutineMAnagement: React.FC = () => {
  const [activeUser, setActiveUser] = useState<User>();

  // const url =
  //   process.env.REACT_APP_API_URL +
  //   `rmExercises/${activeUser ? activeUser.id : ''}`;

  return (
    <TableProvider>
      <RoutineMaker activeUserState={[activeUser, setActiveUser]} />
    </TableProvider>
  );
};
