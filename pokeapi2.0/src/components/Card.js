import Modal from './Modal/Modal'
import imagen from '../assets/images/foto.jpeg'
import { Routes, Route, Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="cards" >
        <div onClick={""} className="card"  >
          <div className="card-info">
            <Link to="/modal">
              <p className="poke-number"> 123</p>
            </Link>
            <p className="poke-name">nombre Pokemon</p>
            <div className="">
              <button type='button' className="button-poke-categorie">water</button>
              <button type='button' className="button-poke-categorie">fire</button>
            </div>
          </div>
          <div className="card-image"><img className="card-img" src={imagen} alt="" /></div>

          <Routes>
            <Route path='/modal' element={<Modal />} />

          </Routes>
        </div>
      </div>
    </>
  )
}

export default Card 