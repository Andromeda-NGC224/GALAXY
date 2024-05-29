import css from "./App.module.css";
import { Route, Routes } from 'react-router-dom';
import {  lazy } from "react";
import Layout from "../Layout/Layout";


const EarthApp = lazy(() => import('../../pages/Earth/EarthApp'))
const SunApp = lazy(() => import('../../pages/Sun/SunApp'))
const VenusApp = lazy(() => import('../../pages/Venus/VenusApp'))

const App = () => {

  return (
   <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<EarthApp />} />
        <Route path="/Venus" element={<VenusApp />}/>
        <Route path="/Sun" element={<SunApp />} />
      </Routes>
  </Layout>
  )
};

export default App;
