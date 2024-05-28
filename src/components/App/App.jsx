import css from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import Earth from '../../pages/Earth/EarthApp'
import Sun from '../../pages/Sun/SunApp'


const App = () => {

  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleWheelScroll = (event) => {
  //   const deltaY = event.deltaY;
  //   if (deltaY > 0) {
  //     navigate('/Sun');
  //   } else {
  //     navigate('/');
  //   }
  // };
  // onWheel={handleWheelScroll}

  return (
      <div>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Earth />} />
        {/* <Route path="/Sun" element={<Sun />} /> */}
      </Routes>
      </AnimatePresence>
    </div>
  )
};

export default App;
