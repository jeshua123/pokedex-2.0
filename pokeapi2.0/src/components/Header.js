import React from 'react'

function Header() {
  return <>
    <div className="header">

      <div className="logo-div">
        <div className="child-to-body">
          <img src="pokeBannerGimp.png" width="250" alt="" />
          <div className="poke_box">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </div>
        </div>
        <h1>pokedex</h1>
      </div>
      <div className="imput-div">
        <div className="search-box">
          <button className="btn-search"><i className="fas fa-search "></i></button>
          <input type="text" className="input-search" placeholder="Type to Search..."/>
        </div>
        
      
      </div>

    </div> </>
}

export default Header
