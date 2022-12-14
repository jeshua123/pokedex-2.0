function Modal({ setshowmodal }) {
  
  
  const handleClick = () => {
    setshowmodal(false)
  }

  return (
<>   
      <div onClick={() => {handleClick()}} className="div-mod" >
        <div className="mod-content" >
       <p># 123</p>
          <p>pokemon name</p>
        </div>
  
      </div>
</>
  )
}

export default Modal