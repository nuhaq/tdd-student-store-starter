import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import {useState} from "react"

export default function ProductGrid(props) {

    const [button, setButton] = useState("All Categories")
    const [search, setSearch] = useState("")

    const quantityHelper = (id) => {
        let quantity = 0
        props.shoppingCart.forEach(e => {
            if (e.itemId === id) {
                quantity = e.quantity
            }
        })
        return quantity
    }


    const getCategories = (item) => {
        if (button === "All Categories") {
          return true
        } else {
           return button === item.category
        }
      }
    const getSearch = (item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    }



    return (
        <><form className="search">
            <input onChange={(e) => {
                setSearch(e.target.value)
            }} className="bar" placeholder="Type Here" />
            <button  id="search-button">Search</button>
        </form>

        <div className="categories">
            <button id="categories" onClick={() => { setButton("All Categories") } }>All Categories</button>
            <button id="categories" onClick={() => { setButton("clothing") } }>Clothing</button>
            <button id="categories" onClick={() => { setButton("food") } }>Food</button>
            <button id="categories" onClick={() => { setButton("accessories") } }>Accessories</button>
            <button id="categories" onClick={() => { setButton("tech") } }>Tech</button>
        </div>
        <div className="product-grid">
        {props.products.filter(getCategories).filter(getSearch).map(e => {
            return <ProductCard showDescription={false} key={e.name} quantity={quantityHelper(e.id)}
                product={e} productId={e.id} handleAddItemToCart={props.handleAddItemToCart}
                handleRemoveItemToCart={props.handleRemoveItemToCart} setFetching={props.setFetching} />
        })}
            </div></>
    )
}
