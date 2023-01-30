import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import PokedexDataTable from "./PokedexDataTable"
import TrainingTable from "./TrainingTable"
import BaseStats from "./BaseStats"



function Modal({ setshowmodal }) {
  const [menuDisplay, setmenuDisplay] = useState(true);


  const handleClick = () => {
    setshowmodal(false)
  }

  return (
    <>
      <div onClick={() => { handleClick() }} className="div-mod" >
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
            <BrowserRouter>
              <nav>
                <a href="1">About</a>
                <a href="2">Base Stats</a>
                <a href="3">Evolution</a>
                <div className="animation start-home"></div>
              </nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/modal" element={<Modal />}>
                </Route>
              </Routes>
            </BrowserRouter>

          </div>
          {menuDisplay &&
            <>
              <div className="mod-section-5">
                <p className='pokemon-description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil laudantium at eveniet quis!
                </p>
              </div>
              <div className="mod-section-6">
                < PokedexDataTable />
              </div>
              <div className="mod-section-7">
                <TrainingTable />
              </div>
            </>
          }
          <div className="baseStats-div">
            <BaseStats />
          </div>
        </div>

      </div>

    </>
  )
}

export default Modal