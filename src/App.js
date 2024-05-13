import React, { useState } from 'react';
import './App.css';
import Header from './modules/Header';
import Banner from './modules/Banner';
import Events from './modules/Events';
import ModalWindow from './login_page/ModalWindow';

const App = () => {


  return (
    <div className="App">
<Header></Header>
<ModalWindow></ModalWindow>

<Banner></Banner>
<Events></Events>

    </div>
  );
};

export default App;
