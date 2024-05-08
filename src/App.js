import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Upload from "./Pages/Upload";
import Delete from "./Pages/Delete";

import "./css/bootstrap.css";
import "./css/responsive.css";
import "./css/style.css";
import "./css/custom.css";




const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="" element={<Home></Home>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route path="upload" element={<Upload></Upload>}></Route>
        <Route path="delete" element={<Delete></Delete>}></Route>

      </Routes>
    </BrowserRouter>

  )
}
export default App;