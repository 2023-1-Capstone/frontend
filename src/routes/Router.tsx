import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import StartPage from '../pages/Start/Start';
import HomePage from '../pages/Home/Home';
import BuildingElectricity from '../pages/BuildingElectricity/BuildingElectricity';
import BuildingGas from '../pages/BuildingGas/BuildingGas';
import Indicate from '../pages/Indicate/Indicate';
import SeasonEletricity from '../pages/Indicate/Season/electricity/SeasonElectricity';
import SeasonGas from '../pages/Indicate/Season/gas/SeasonGas';
import CarbonAll from '../pages/Indicate/Carbon/All/CarbonAll';
import CarbonBuildings from '../pages/Indicate/Carbon/Buildings/CarbonBuildings';
import AreaElectricity from '../pages/Indicate/Area/electricity/AreaElectricity';
import AreaGas from '../pages/Indicate/Area/gas/AreaGas';
import SignUp from '../pages/SignUp/SignUp';
import FindPassword from '../pages/FindPassword/FindPassword';
import ModifyPassword from '../pages/ModifyPassword/ModifyPassword';
import Exception from '../pages/Exception/Exception';
import Water from '../pages/Water/Water';
import ElectricityAll from '../pages/ElectricityAll/ElectricityAll';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/electricity" element={<BuildingElectricity />} />
          <Route path="/gas" element={<BuildingGas />} />
          <Route path="/indicator" element={<Indicate />} />
          <Route path="/findPassword" element={<FindPassword />} />
          <Route path="/modifyPassword" element={<ModifyPassword />} />
          <Route
            path="/indicator/season/electricity"
            element={<SeasonEletricity />}
          />
          <Route path="/indicator/season/gas" element={<SeasonGas />} />
          <Route path="/indicator/carbon/all" element={<CarbonAll />} />
          <Route
            path="/indicator/carbon/buildings"
            element={<CarbonBuildings />}
          />
          <Route
            path="/indicator/area/electricity"
            element={<AreaElectricity />}
          />
          <Route path="/indicator/area/gas" element={<AreaGas />} />
          <Route path="/authException" element={<Exception />} />
          <Route path="/water" element={<Water />} />
          <Route path="/electricityAll" element={<ElectricityAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
