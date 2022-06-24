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
        let quantity = -1
        props.shoppingCart.forEach(e => {
            if (e.id === id) {
                quantity = e.quantity
            }
        })
        return (index===-1 || props.shoppingCart[index].quantity===0) ? "" : props.shoppingCart(index)
    }

    async function fetchProd() {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${params.productId}`)
        if (response) {
            setProduct(response.data.product)
        }
        props.setFetching(false)
    }
    useEffect(() => {
        fetchProd()
    }, [])

    return (
        <div className="product-view">
            <ProductView product={product} quantity={quantity(product.id)} productId={product.id}
                handleAddItemToCart= {props.handleAddItemToCart} 
                handleRemoveItemToCart={props.handleRemoveItemToCart}
                />
        </div>
    )

}