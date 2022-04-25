import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutineMaker from './pages/RoutineMaker/RoutineMaker';
import RoutineMakerUI from './pages/RoutineMaker/RoutineMaker_UI';
import GlobalStyle from './styled-components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RoutineMaker />} />
          <Route path='/ui' element={<RoutineMakerUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
