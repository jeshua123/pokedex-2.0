import React from 'react';
import  imagen  from "../assets/images/foto.jpeg";
const Main = () => {


  
  return (
    <div class="cards">
      <div class="card">
        <div className="card-info">
          <p className="poke-number"> 123</p>
          <p className="poke-name">nombre Pokemon</p>
          <button type='button' className="button-poke-categorie">water</button>
          <button type='button' className="button-poke-categorie">fire</button>
        
        </div>
        <div className="card-image"><img className="card-img" src={ imagen }  alt="" /></div>
        </div>
      <div class="card">TWO</div>
      <div class="card">THREE</div>
      <div class="card">FOUR</div>
      <div class="card">FIVE</div>
      <div class="card">SIX</div>
      <div class="card">SEVEN</div>
      <div class="card">EIGHT</div>
      <div class="card">NINE</div>
      <div class="card">TEN</div>
      <div class="card">ELEVEN</div>
      <div class="card">TWELVE</div>
    </div>
    
  );
}

export default Main;
