

import './App.css'
import Header from './components/Header/Header'
import CountryList from './components/CountryList/CountryList'
import * as React from "react";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      {/* <CountryList /> */}
      <Outlet />
    </>
  )
}

export default App
