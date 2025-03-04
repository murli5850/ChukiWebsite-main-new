import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';


import Favicon from "react-favicon";
import { useState } from "react";

import Header from './Component/header';
import Home from './Pages/home';



function App() {
  useEffect(() => {
    document.title = "Chuki - Food Scanner App";
  }, []);
  const [faviconUrl] = useState(
    "favicon.png"
  );

  return (
    <>
      <Favicon url={faviconUrl} />
      <div className="app">

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
