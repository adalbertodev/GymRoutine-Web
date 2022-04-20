import RoutineTable from './components/RoutineTable';
import { SaveButton } from './styled-components/SaveButton';
import html2canvas from 'html2canvas';

const RutineMaker = () => {
  const downloadTable = async () => {
    const table = document.querySelector('#rutineTable') as HTMLElement;

    if (table === null) {
      return;
    }

    const canvas = await html2canvas(table);
    const img = canvas.toDataURL('img/png');
    const link = document.createElement('a');
    link.download = 'Rutine.png';
    link.href = img;
    link.click();
  };

  return (
    <div className='container'>
      <RoutineTable></RoutineTable>
      <SaveButton onClick={downloadTable}>Guardar</SaveButton>
    </div>
  );
};

export default RutineMaker;