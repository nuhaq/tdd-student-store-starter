import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

import axios from "axios"
import { useEffect } from "react"
import {BrowserRouter} from "react-router-dom"



export default function ProductGrid(props) {
    console.log(props.products) //an array of product objects
    //handleAddItemToCart - handler function defined in the App.jsx component
    //handleRemoveItemToCart - handler function defined in the App.jsx component
    return (
        <div className="product-grid"> {
        props.products.map((e, idx) => {
            return <ProductCard showDescription={false} key={idx}
            // quantity={e}
            product={e} productId={e.id} handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemToCart={props.handleRemoveItemToCart} />
        })
        }
        </div>
    )
}
