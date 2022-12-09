import React from 'react'

function Header() {
  return <>
    <div className="header">

      <div className="logo-div">
        <div class="child-to-body">
          <img src="pokeBannerGimp.png" width="250" alt="" />
          <div class="poke_box">
            <div class="pokeball">
              <div class="pokeball__button"></div>
            </div>
          </div>
        </div>
        <h1>pokedex</h1>
      </div>
      <div className="imput-div">
        <div class="search-box">
          <button class="btn-search"><i class="fas fa-search "></i></button>
          <input type="text" class="input-search" placeholder="Type to Search..."/>
        </div>
        
      
      </div>

    </div> </>
}

export default Header
