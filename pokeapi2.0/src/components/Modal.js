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
            <p>pokemon name</p>
          </div>
          <div className="mod-section-3">
            <img src="https://api.lorem.space/image/face?w=150&amp;amp;amp;amp;h=220" alt="" />
          </div>
          <div className="mod-section-4">
            <nav>
              <a href="1">About</a>
              <a href="2">Base Stats</a>
              <a href="3">Evolution</a>
              <div class="animation start-home"></div>
            </nav>
          </div>
          <div className="mod-section-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium a recusandae ipsam laborum?</p>
          </div>
          <div className="mod-section-6"></div>

        </div>

      </div>
    </>
  )
}

export default Modal