import { Link } from 'react-router-dom'
import imagen from '../assets/images/foto.jpeg'


function PokemonCard() {

  return (
    <>
      <Link to="/modal">
        <div className="card"  >
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
      </Link>


    </>
  )
}

export default PokemonCard 