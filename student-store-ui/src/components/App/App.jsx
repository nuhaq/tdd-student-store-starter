import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {BrowserRouter} from "react-router-dom"

export default function App() {
  const [pics, setPics] = useState([])

  async function fetchData() {
    const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
    setPics(response.data.products) //array of products
  }
  useEffect(() => {
    fetchData()
  },[])


  const handleAddItemToCart = () => {

  }

  const handleRemoveItemToCart = () => {
    
  }




    return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home products={pics} handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemToCart={handleRemoveItemToCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
