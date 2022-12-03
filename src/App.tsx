import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import NewQuote from "./containers/NewQuote/NewQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}/>
          <Route path="/quotes" element={(
            <Home/>
          )}/>
          <Route path="/quotes/:category" element={(
            <Home/>
          )}/>
          <Route path="/new_quote" element={(
            <NewQuote/>
          )}/>
          <Route path="/quotes/:id/edit" element={(
            <EditQuote/>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
