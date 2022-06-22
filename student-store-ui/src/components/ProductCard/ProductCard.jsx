import * as React from "react"
import {Link} from "react-router-dom"

export default function ProductCard(props) {

    return (
        <div className="product-card">
            <h2 className="product-name">
                {props.product.name}
            </h2>
            <p className="product-price"> $${props.product.price}</p>
            {props.showDescription} ? <p className="product-description">
                {props.showDescription}
            </p>
            <div className="media">
                <Link to="/product/${props.productId}"><img src={props.product.image}/></Link>
            </div>
            {/* <button className="add" onClick={() => }>Add</button> */}

        </div>
    )
}