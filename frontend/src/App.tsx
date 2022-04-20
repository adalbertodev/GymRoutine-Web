import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutineMaker from './pages/RoutineMaker/RoutineMaker';
import GlobalStyle from './styled-components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RoutineMaker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
