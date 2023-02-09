import PokedexDataTable from "./PokedexDataTable"
import TrainingTable from "./TrainingTable"
import BaseStats from "./BaseStats"
import { Routes, Route, Link } from "react-router-dom";

function Modal() {
  return (
    <>
      <div onClick={""} className="div-mod" >
        <div className="mod-content" >
          <div className="mod-section-1">
          </div>
          <div className="mod-section-2">
            <p># 123</p>
            <p>name</p>
            <button type='button' className="button-poke-categorie">water</button>
            <button type='button' className="button-poke-categorie">fire</button>
          </div>
          <div className="mod-section-3">
            <img className="img-card-mod" src="https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=220" alt="" />
          </div>
          <div className="mod-section-4">
            <nav>
              <a href="1">About</a>
              <a href="2">Base Stats</a>
              <a href="3">Evolution</a>
              <div className="animation start-home"></div>
            </nav>
          </div>

          <div className="mod-section-5">
            <p className='pokemon-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil laudantium at eveniet quis!
            </p>
          </div>
          <Routes>
            <Route path="/" element={
              <>

                <div className="mod-section-6"> < PokedexDataTable /></div>
                <div className="mod-section-7"> < TrainingTable /></div>

              </>
            } />
            <Route path="/modal/1" element={<div className="mod-section-7"> < TrainingTable /></div>} />
            <Route path="/modal/2" element={<div className="baseStats-div"> < BaseStats /></div>} />
          </Routes>


        </div>

      </div>

    </>
  )
}

export default Modal