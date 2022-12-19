import React, { useState } from 'react';
import imagen from "../assets/images/foto.jpeg";
import Modal from './Modal';


const Main = () => {

  const [showmodal, setshowmodal] = useState(false)
  console.log(showmodal);
  return (
    <div className="cards" >

      <div onClick={() => { setshowmodal(true) }} className="card"  >
        <div className="card-info">
          <p className="poke-number"> 123</p>
          <p className="poke-name">nombre Pokemon</p>
          <button type='button' className="button-poke-categorie">water</button>
          <button type='button' className="button-poke-categorie">fire</button>

        </div>
        <div className="card-image"><img className="card-img" src={imagen} alt="" /></div>

      </div>
      {showmodal && <Modal setshowmodal={setshowmodal} />}

      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="modal" ></div>

    </div>

  );

}

export default Main;
