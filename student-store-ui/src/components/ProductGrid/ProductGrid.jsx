import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    //handleAddItemToCart - handler function defined in the App.jsx component
    //handleRemoveItemToCart - handler function defined in the App.jsx component
    const quantityHelper = (id) => {
        let quantity = 0
        props.shoppingCart.forEach(e => {
            if (e.id === id) {
                quantity = e.quantity
            }
        })
        return quantity
    }
    return (
        <div className="product-grid"> {
        props.products.map((e, idx) => {
            return <ProductCard showDescription={false} key={idx} quantity={quantityHelper(e.id)}
            product={e} productId={e.id} handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemToCart={props.handleRemoveItemToCart} />
        })
        }
        </div>
    )
}
