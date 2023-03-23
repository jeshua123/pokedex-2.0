import React from 'react'
import Header from '../components/Header'
import PokemonList from '../components/PokemonList'
import { Outlet } from "react-router-dom";


function Home() {
  return (
    <>
      <Header />
      <PokemonList />
      <Outlet />
    </>

  )
}

export default Home