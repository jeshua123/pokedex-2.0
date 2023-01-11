import PokedexDataTable from "./PokedexDataTable"
import TrainingTable from "./TrainingTable"

function Modal({ setshowmodal }) {


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
            < PokedexDataTable />
          </div>
          <div className="mod-section-6">
            <TrainingTable />
          </div>

        </div>

      </div>
    </>
  )
}

export default Modal