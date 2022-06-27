import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"

export default function Home(props) {
  return (
    <div className="home">
      <Hero/>
      <ProductGrid shoppingCart={props.shoppingCart} products={props.products}
      handleRemoveItemToCart={props.handleRemoveItemToCart}
      handleAddItemToCart={props.handleAddItemToCart} setFetching={props.setFetching}/>
      <div className="about-us" id="about-us">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
              <div class="media">
                <img src="https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?k=20&m=868718238&s=612x612&w=0&h=w42q_p1qak9lhVhXKDw1r964uV-AmzSSzC0UsMlMARQ=" alt="shop pic"/>
              </div>
          </div>
      </div>
    </div>
  )
}
