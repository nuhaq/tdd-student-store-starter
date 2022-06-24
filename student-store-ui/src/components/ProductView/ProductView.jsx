import "./ProductView.css"
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    console.log("HERE")
    return (
        <div className="product-view">
            <h1 className="product-id">Product # {props.productId}</h1>
            <ProductCard  showDescription={true}  product={product} quantity={quantity(product.id)} 
            productId={product.id} handleAddItemToCart= {props.handleAddItemToCart} 
            handleRemoveItemToCart={props.handleRemoveItemToCart}
            />
        </div>
    )
}