import React from "react";

//Add Styling
import "./styles/app.scss"

//Add Components
import Column from "./components/Column"
import Tray from "./components/Tray"
import Nav from "./components/Nav"

//Add Data
import Data from "./data"

function App() {
  return (
    <div className='page-container'>
        <Nav />
        <div className='flex-container-left-row'>
          <Tray />
          <Column/>
        </div>
      </div>
  );
}



export default App;