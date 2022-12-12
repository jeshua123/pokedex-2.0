import React from 'react';

const Pokeball = () => {
  return (
    <>
      <div className="box child-to-body">
        <img src="pokeBannerGimp.png" width="250" alt=""/>
          <div className="poke_box">
            <div className="pokeball">
              <div className="pokeball__button"></div>
            </div>
          </div>
          <p className="has-text-centered" >Hover Over Me!!!</p>
      </div>
    </>
  );
}

export default Pokeball;
