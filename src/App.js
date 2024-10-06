import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNav from "component/topNav"

import Invest from "pages/Invest"
import Detail from "pages/Detail"
import Landing from "pages/landing"
import Earn from "pages/Earn"
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<TopNav />} />
            <Route path="/overview" element={<TopNav />} />
            <Route path="/invest" element={<TopNav />} />
            <Route path="/earn" element={<TopNav />} />
            <Route path="/detail/:id" element={<TopNav />} />
          </Routes>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/overview" element={<Invest />} />
          <Route exact path="/earn" element={<Earn />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
