import "./ShoppingCart.css"
import * as React from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function ShoppingCart(props) {

    const getTotal = (tax) => {
        let total = 0
        props.shoppingCart.forEach(item => {
            total += props.products[item.itemId-1].price * (item.quantity)
        })
        return (total*tax).toFixed(2)
    }
    return (
        <div className="shopping-cart">
            <div className={props.shoppingCart.length===0 ? "notification" : "notification hidden"}>
            No items added to cart yet. Start shopping now!
            </div>
            {props.shoppingCart.map(item => {
                console.log(item)
            return ( <div key={item.itemId}><div  className="cart-product-name"> {props.products[item.itemId-1].name} </div>
                <p className="cart-product-quantity" >x{item.quantity}</p></div>
            )})}
        <div className={props.shoppingCart.length!==0 ? "subtotal" : "subtotal hidden"}>
            Subtotal: ${getTotal(1)}
        </div>
        <div className={props.shoppingCart.length!==0 ? "taxes" : "taxes hidden"}>
            Taxes and Fees: ${getTotal(0.0875)}
        </div>
        <div className={props.shoppingCart.length!==0 ? "total" : "total hidden"}>
            Total: ${getTotal(1.0875)}
        </div>
        </div>

    )

}
