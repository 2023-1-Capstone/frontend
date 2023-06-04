import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import StartPage from '../pages/Start/Start';
import HomePage from '../pages/Home/Home';
import Indicate from '../pages/Indicate/Indicate';
import CarbonAll from '../pages/Indicate/Carbon/All/CarbonAll';
import CarbonBuildings from '../pages/Indicate/Carbon/Buildings/CarbonBuildings';
import SignUp from '../pages/SignUp/SignUp';
import FindPassword from '../pages/FindPassword/FindPassword';
import ModifyPassword from '../pages/ModifyPassword/ModifyPassword';
import Exception from '../pages/Exception/Exception';
import Water from '../pages/Water/Water';
import Electricity from '../pages/Electricity/Electricity';
import Gas from '../pages/Gas/Gas';
import Carbon from '../pages/Carbon/Carbon';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/electricity" element={<Electricity />} />
          <Route path="/gas" element={<Gas />} />
          <Route path="/carbon" element={<Carbon />} />
          <Route path="/findPassword" element={<FindPassword />} />
          <Route path="/modifyPassword" element={<ModifyPassword />} />
          <Route path="/indicator/carbon/all" element={<CarbonAll />} />
          <Route
            path="/indicator/carbon/buildings"
            element={<CarbonBuildings />}
          />
          <Route path="/authException" element={<Exception />} />
          <Route path="/water" element={<Water />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
