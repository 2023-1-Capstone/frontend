import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import StartPage from '../pages/Start/Start';
import HomePage from '../pages/Home/Home';
import BuildingElectricity from '../pages/BuildingElectricity/BuildingElectricity';
import App from '../App';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/electricity" element={<BuildingElectricity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
