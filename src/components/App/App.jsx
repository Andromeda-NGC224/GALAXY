import { Route, Routes, useLocation } from 'react-router-dom';
import {  lazy } from "react";
import Layout from "../Layout/Layout";
import PageSwiper from '../../components/PageSwiper/PageSwiper';


const NeptuneApp = lazy(() => import('../../pages/Neptune/NeptuneApp'))
const UranusApp = lazy(() => import('../../pages/Uranus/UranusApp'))
const SaturnApp = lazy(() => import('../../pages/Saturn/SaturnApp'))
const JupiterApp = lazy(() => import('../../pages/Jupiter/JupiterApp'))
const MarsApp = lazy(() => import('../../pages/Mars/MarsApp'))
const EarthApp = lazy(() => import('../../pages/Earth/EarthApp'))
const VenusApp = lazy(() => import('../../pages/Venus/VenusApp'))
const MercuryApp = lazy(() => import('../../pages/Mercury/MercuryApp'))
const SunApp = lazy(() => import('../../pages/Sun/SunApp'))


const App = () => {
  const location = useLocation()

  return (
    <Layout>
      <PageSwiper>
      <Routes location={location} key={location.pathname}>
        <Route path="/Neptune" element={<NeptuneApp />} />
        <Route path="/Uranus" element={<UranusApp />} />
        <Route path="/Saturn" element={<SaturnApp />} />
        <Route path="/Jupiter" element={<JupiterApp />} />
        <Route path="/Mars" element={<MarsApp />} />
        <Route path="/" element={<EarthApp />} />
        <Route path="/Venus" element={<VenusApp />} />
        <Route path="/Mercury" element={<MercuryApp />}/>
        <Route path="/Sun" element={<SunApp />} />
        </Routes>
      </PageSwiper>
  </Layout>
  )
};

export default App;
