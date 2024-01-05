import React from "react"
import "./Product.css"

function Product() {
    return <div
        className= "product" >
        <div className="product_details">
            <p> RTX 4090</p>
            <p className="product_price">
                <strong>2000</strong>
            </p>
            <div className="product_rating">
                <p>⭐</p>
            </div>
        </div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fb2c-contenthub.com%2Fwp-content%2Fuploads%2F2022%2F10%2FNvidia-GeForce-RTX-4090-1.jpg%3Fquality%3D50%26strip%3Dall&f=1&nofb=1&ipt=d56dcae6167cf3f45289fd475e78e9496f8689e3fb3e4516f8f30b6093156a33&ipo=images"
        />

        <button>buy now</button>
    </div>;
}

export default Product;