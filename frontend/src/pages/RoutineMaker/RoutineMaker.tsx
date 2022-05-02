import RoutineTable from './components/Table/RoutineTable';
import { RoutineMakerContainer } from './styled-components/RoutineMakerContainer';
import TableSettings from './components/TableSettings';
import TableSubmit from './components/TableSubmit';
import { useMemo, useState } from 'react';
import User from './entities/User';
// import RmExercise from './entities/RmExercise';
// import { useFetchRmExercise } from './hooks/useFetchRmExercise';
import { useFetch } from '../../hooks/useFetch';
import RmExercise from './entities/RmExercise';
import { useTable } from './hooks/useTable';
import { TableContext } from './components/TableContext';

const RoutineMaker: React.FC = () => {
  const [activeUser, setActiveUser] = useState<User>();

  const { table, dispatch } = useTable();

  // const url =
  //   process.env.REACT_APP_API_URL +
  //   `rmExercises/${activeUser ? activeUser.id : ''}`;
  // const { data } = useFetch(url, 'GET');
  // const rmExercises = useMemo(() => (data ? data : []), [data]) as RmExercise[];

  // const { rmExercises } = useFetchRmExercise(url, 'GET');

  // console.log(rmExercises);

  return (
    <TableContext.Provider value={{ table, dispatch }}>
      <RoutineMakerContainer>
        <TableSettings activeUserState={[activeUser, setActiveUser]} />
        <RoutineTable rows={table.rows} />
        <TableSubmit />
      </RoutineMakerContainer>
    </TableContext.Provider>
  );
};

export default RoutineMaker;
