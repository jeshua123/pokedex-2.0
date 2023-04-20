import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import PokemonStatsCard from './components/pokecard/PokemonStatscard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonStatsCard />
    </BrowserRouter>
  </React.StrictMode>
)









