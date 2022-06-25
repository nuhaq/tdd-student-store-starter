import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"

export default function Home(props) {
  return (
    <div className="home">
      <Hero/>
      <ProductGrid shoppingCart={props.shoppingCart} products={props.products} 
      handleRemoveItemToCart={props.handleRemoveItemToCart}
      handleAddItemToCart={props.handleAddItemToCart} setFetching={props.setFetching}/>
    </div>
  )
}
