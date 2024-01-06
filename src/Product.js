import React from "react"
import "./Product.css"

function Product({seller, id, title, image, price, rating}) {
    return <div
        className= "product" >
        <div className="product_details">
            <p> {title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

        </div>
        <img src={image}
        />

        <button>buy now</button>
    </div>;
}

export default Product;