import RoutineTable from './components/Table/RoutineTable';
import { RoutineMakerContainer } from './styled-components/RoutineMakerContainer';
import TableSettings from './components/TableSettings';
import TableSubmit from './components/TableSubmit';
import { useState } from 'react';
import User from './entities/User';
// import RmExercise from './entities/RmExercise';
import { useFetchRmExercise } from './hooks/useFetchRmExercise';

const RoutineMaker = () => {
  const [activeUser, setActiveUser] = useState<User>();

  const url =
    process.env.REACT_APP_API_URL +
    `rmExercises/${activeUser ? activeUser.id : ''}`;
  const { rmExercises } = useFetchRmExercise(url, 'GET');

  console.log(rmExercises);

  return (
    <RoutineMakerContainer>
      <TableSettings activeUserState={[activeUser, setActiveUser]} />

      <RoutineTable />

      <TableSubmit />
    </RoutineMakerContainer>
  );
};

export default RoutineMaker;
