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
  const [checkoutForm, setForm] = useState({})


  async function fetchData() {
    const response = await axios.get("https://codepath-store-api.herokuapp.com/store")
    setProducts(response.data.products)
  }
  useEffect(() => {
    fetchData()
  },[])


  const handleAddItemToCart = (productId) => {
   let index = -1;
   shoppingCart.forEach((item, idx) => {
    if (item.id === productId) {
      index = idx;
    }
   })
   if (index === -1) { //not found
    const obj = {id: productId, quantity: 1}
    setCart((prevState)=>[...prevState, obj])
   } else {
    let cartTemp = [...shoppingCart]
    cartTemp[index].quantity += 1
    setCart(cartTemp);
   }
    // add the price of the product to the total price of the shoppingCart.
  }

  const handleRemoveItemToCart = (productId) => {
    const found = shoppingCart.find(item => {
      return item.id === productId
    })

    if (found) {
      const newState = []
      shoppingCart.map(obj => {
        if (obj.id === productId) {
          const temp = obj.quantity - 1;
          if (temp!==0) {
            newState.push({id: productId, quantity: temp});
          }
        } else {
          newState.push(obj);
        }
      });
      setCart(newState)
      console.log(shoppingCart)
    }
  }

  const handleOnToggle = () => {
    setisOpen(!isOpen)
  }

  
  const handleOnCheckoutFormChange = (name, value) => {
    setForm({name: name, value: value})

  }
  
  const handleOnSubmitCheckoutForm = () => {

  }

    return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart}
          products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Home shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemToCart={handleRemoveItemToCart}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
