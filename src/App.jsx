import React from "react"
import Nav from "./nav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Products from "./products"
import Contact from "./contact"
import Clock from "./clock"
import Recipes from "./Recipes"
import Move from "./Move"
import Food from "./food"
import Emp from "./EMp"
import Currency from "./Currency"

function App() {

  
  return (
    <>
      
      <BrowserRouter>
      <Nav/>

      <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />

    <Route path="/products" element={<Products/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/clock" element={<Clock/>} />
    <Route path="/Recipes" element={<Recipes/>} />
    <Route path="/Move" element={<Move/>} />
    <Route path="/food" element={<Food/>} />
    <Route path="/EMp" element={<Emp/>} />
   
      </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
