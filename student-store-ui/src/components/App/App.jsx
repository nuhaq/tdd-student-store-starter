import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {BrowserRouter} from "react-router-dom"

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setFetching] = useState(true)
  //whether or not the App is currently fetching the products from the API.
  const [error, setError] = useState("")
  const [isOpen, setisOpen] = useState(false)
  const [shoppingCart, setCart] = useState([])


  async function fetchData() {
    const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
    setProducts(response.data.products) //array of products
  }
  useEffect(() => {
    fetchData()
  },[])


  const handleAddItemToCart = (productId) => {

  }

  const handleRemoveItemToCart = (productId) => {

  }

  const handleOnToggle = () => {
    setisOpen(!isOpen)
  }



    return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart}
          products={products}/>
          <Home products={products} handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemToCart={handleRemoveItemToCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
