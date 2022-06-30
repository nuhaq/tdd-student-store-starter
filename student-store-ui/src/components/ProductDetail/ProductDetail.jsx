import "./ProductDetail.css"
import * as React from "react"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"


export default function ProductDetail(props) {
    const [product, setProduct] = useState({})
    const params = useParams();
    const quantityHelper = (id) => {
        let quantity = 0
        props.shoppingCart.forEach(e => {
            if (e.itemId === id) {
                quantity = e.quantity
            }
        })
        return quantity
    }

    async function fetchProd() {
        props.setFetching(true)
        const response = await axios.get(`localhost:3001/store/${params.productId}`).catch(err => props.setError(err))
        console.log(response)
        if (response) {
            setProduct(response.data.product)
        }
        props.setFetching(false)
    }
    useEffect(() => {
        fetchProd()
    }, [])
    if (props.error !== "") {
        return <NotFound error={"product doesn't exist"}/>
    }

    return (
        <div className="product-detail">
            {props.isFetching ? <h1>Loading...</h1>:
          (product===undefined) ? <NotFound error={props.error} /> :
            <ProductView product={product} quantity={quantityHelper(product.id)} productId={product.id}
                handleAddItemToCart= {props.handleAddItemToCart}
                handleRemoveItemToCart={props.handleRemoveItemToCart} setFetching={props.setFetching}
                />}
        </div>
    )


}
