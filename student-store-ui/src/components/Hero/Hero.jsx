import * as React from "react"
import "./Hero.css"

export default function Hero() {
    return (
        <div className="hero"> 
            <div className="intro"> Welcome!</div>
            <div className="text">
            We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready. 
                <img className="hero-img" src="https://cdn0.iconfinder.com/data/icons/shopping-thick-true-line-black-and-white/64/store-shop-trade-building-512.png"/>

            </div>
        </div>

    )
}
