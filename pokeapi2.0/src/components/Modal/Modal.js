
import { Link, Outlet } from "react-router-dom";

function Modal() {
  return (
    <>
      <div className="div-mod" >
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
              <Link className="link" to="/">About</Link>
              <Link className="link" to="/modal/1">Base Stats</Link>
              <Link className="link" to="/modal/2">Evolution</Link>
              <div className="animation start-home"></div>
            </nav>
          </div>

          <div className="mod-section-5">
            <p className='pokemon-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nihil laudantium at eveniet quis!
            </p>
          </div>

          <Outlet />

        </div>

      </div>

    </>
  )
}

export default Modal