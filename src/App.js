import {Routes, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import { AppRoute } from './const';
import Layout from './components/layout/layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route path={'stc-test'} element = {<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
