import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import StartPage from '../pages/Start/Start';
import App from '../App';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
