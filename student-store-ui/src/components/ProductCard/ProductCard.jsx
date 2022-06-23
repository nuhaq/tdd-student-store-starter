import * as React from "react"
import {Link} from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard(props) {

    return (
        <div className="product-card">
            <h2 className="product-name">
                {props.product.name}
            </h2>
            <p className="product-price"> ${props.product.price.toFixed(2)} </p>
            <div className={props.showDescription ? "product-description" : "product-description hidden"}>
                {props.showDescription}
            </div>
            <div className="media">
                <Link to="/product/${props.productId}"><img src={props.product.image}/></Link>
            </div>
            <button className="add" onClick={() => props.handleAddItemToCart(props.productId)} >Add</button>

        </div>
    )
}