import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "../NotFound/NotFound"

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setFetching] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setisOpen] = useState(false)
  const [shoppingCart, setCart] = useState([])
  const [checkoutForm, setForm] = useState({name: "", email: ""})
  const [message, setMessage] = useState("")


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
    if (item.itemId === productId) {
      index = idx;
    }
   })
   if (index === -1) { //not found
    const obj = {itemId: productId, quantity: 1}
    setCart((prevState)=>[...prevState, obj])
   } else {
    let cartTemp = [...shoppingCart]
    cartTemp[index].quantity += 1
    setCart(cartTemp);
   }
  }

  const handleRemoveItemToCart = (productId) => {
    const found = shoppingCart.find(item => {
      return item.itemId === productId
    })

    if (found) {
      const newState = []
      shoppingCart.map(obj => {
        if (obj.itemId === productId) {
          const temp = obj.quantity - 1;
          if (temp!==0) {
            newState.push({itemId: productId, quantity: temp});
          }
        } else {
          newState.push(obj);
        }
      });
      setCart(newState)
    }
  }

  const handleOnToggle = () => {
    setisOpen(!isOpen)
  }


  function handleOnCheckoutFormChange(name, value) {
    let tempCheck = {...checkoutForm}
    tempCheck[name] = value
    setForm(tempCheck)

}

async function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart) {
  let response = await axios.post("https://codepath-store-api.herokuapp.com/store", {user: checkoutForm, shoppingCart: shoppingCart}).catch((err) => {
    setMessage(err.response.data.error.message); setError(err); return;
  })
  setMessage("Success! " + response.data.purchase.receipt.lines.join(" ") + "!")
}

    return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} shoppingCart={shoppingCart} setCart={setCart} setForm={setForm}
      products={products} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} setMessage={setMessage} message={message}/>
      <Routes>
        <Route path="/" element={<Home setFetching={setFetching} shoppingCart={shoppingCart} products={products} handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}/>}/>
        <Route path="/product/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} setError={setError} error={error}
        isFetching={isFetching} setFetching={setFetching} shoppingCart={shoppingCart} handleRemoveItemToCart={handleRemoveItemToCart}/>}/>
        <Route path="*" element={<NotFound error={"check URL"}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
