import React from 'react';
import { Routes, Route } from "react-router-dom";
import Modal from './components/Modal/Modal';
import Home from './pages/Home';

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/" element={< Home />} >
          <Route path="/modal" element={< Modal />} />
        </Route>

      </Routes>
    </>
  );
}

export default Router;
/* <>

  <div className="mod-section-6"> < PokedexDataTable /></div>
  <div className="mod-section-7"> < TrainingTable /></div>
        <Route path="/modal/1" element={<div className="mod-section-7"> < TrainingTable /></div>} />
        <Route path="/modal/2" element={<div className="baseStats-div"> < BaseStats /></div>} />
</> */