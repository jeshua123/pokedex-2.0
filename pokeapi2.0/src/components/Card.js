import Modal from './Modal/Modal'
import imagen from '../assets/images/foto.jpeg'

function Card() {
  return (
    <>

      <div className="cards" >
        <div onClick={""} className="card"  >
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
        <Modal />
      </div>

    </>
  )
}

export default Card 