import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutineMAnagement } from './pages/RoutineMaker/RoutineManagement';
import GlobalStyle from './styled-components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RoutineMAnagement />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
