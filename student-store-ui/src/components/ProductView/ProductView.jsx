import "./ProductView.css"
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    console.log(props.product)
    return (
        <div className="product-view">
            <h1 className="product-id">Product # {props.productId}</h1>
            <ProductCard  showDescription={true}  product={props.product} quantity={props.quantity} 
            productId={props.product.id} handleAddItemToCart= {props.handleAddItemToCart} 
            handleRemoveItemToCart={props.handleRemoveItemToCart} setFetching={props.setFetching}
            />
        </div>
    )
}