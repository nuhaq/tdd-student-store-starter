import * as React from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section className="sidebar">
    
      <div className={props.isOpen ? "big-sidebar" : "big-sidebar hidden"}>
        <button onClick={props.handleOnToggle} className="big-toggle-button">big-tog</button>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/>
        <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} 
        checkoutForm={props.checkoutForm} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}/>
      </div>
      <div className={props.isOpen ? "small-sidebar hidden" : "small-sidebar"}>
        <button onClick={props.handleOnToggle} className="small-toggle-button">small-tog</button>
      </div>



    </section>
  )
}
