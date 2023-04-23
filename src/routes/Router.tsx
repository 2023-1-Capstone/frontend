import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import StartPage from '../pages/Start/Start';
import HomePage from '../pages/Home/Home';
import BuildingElectricity from '../pages/BuildingElectricity/BuildingElectricity';
import BuildingGas from '../pages/BuildingGas/BuildingGas';
import Indicate from '../pages/Indicate/Indicate';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/electricity" element={<BuildingElectricity />} />
          <Route path="/gas" element={<BuildingGas />} />
          <Route path="/indicator" element={<Indicate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
