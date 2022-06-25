import "./ProductDetail.css"
import * as React from "react"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"


export default function ProductDetail(props) {
    const [product, setProduct] = useState({})
    const params = useParams();
    const quantityHelper = (id) => {
        let quantity = 0
        props.shoppingCart.forEach(e => {
            if (e.id === id) {
                quantity = e.quantity
            }
        })
        return quantity
    }

    async function fetchProd() {
        props.setFetching(true)
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${params.productId}`)
        console.log(response)
        if (response) {
            setProduct(response.data.product)
            console.log("HERE")
        }
        props.setFetching(false)
    }
    useEffect(() => {
        console.log("HERE")
        fetchProd()
        console.log(product)
    }, [])

    return (
        <div className="product-view">
            <ProductView product={product} quantity={quantityHelper(product.id)} productId={product.id}
                handleAddItemToCart= {props.handleAddItemToCart} 
                handleRemoveItemToCart={props.handleRemoveItemToCart} setFetching={props.setFetching}
                />
        </div>
    )

}