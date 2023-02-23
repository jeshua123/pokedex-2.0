import Modal from './Modal/Modal'
import imagen from '../assets/images/foto.jpeg'
import { useState } from 'react'
function PokemonCard() {
  const [showModal, setShowmodal] = useState(null);
  return (
    <>
      <div onClick={() => { setShowmodal(true) }} className="card"  >
        <div className="card-info">
          <p className="poke-number"> 123</p>
          <p className="poke-name">nombre Pokemon</p>
          <div className="">
            <button type='button' className="button-poke-categorie">water</button>
            <button type='button' className="button-poke-categorie">fire</button>
          </div>
        </div>
        <div className="card-image"><img className="card-img" src={imagen} alt="" /></div>
      </div>
      {showModal && <Modal />}
    </>
  )
}

export default PokemonCard 