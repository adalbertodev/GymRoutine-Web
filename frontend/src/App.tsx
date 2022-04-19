import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RutineMaker from './pages/RutineMaker/RutineMaker';
import GlobalStyle from './styled-components/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RutineMaker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
