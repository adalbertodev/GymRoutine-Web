import RoutineTable from './components/Table/RoutineTable';
import { RoutineMakerContainer } from './styled-components/RoutineMakerContainer';
import TableSettings from './components/TableSettings';
import TableSubmit from './components/TableSubmit';

const RoutineMaker = () => {
  return (
    <RoutineMakerContainer>
      <TableSettings />

      <RoutineTable />

      <TableSubmit />
    </RoutineMakerContainer>
  );
};

export default RoutineMaker;
