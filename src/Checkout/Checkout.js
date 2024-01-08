import React from "react";
import "./Checkout.css";
import "./Subtotal"

function Checkout({ cart, removeFromCart }) {
    return (
        <div className="checkout">
            <div className="checkout_viewbasket">
                <h2 className="checkout_title">Your Shopping Cart</h2>
                {cart.map(item => (
                    <div key={item.id} className="checkout_item">
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p> {/* Display the price */}
                        {/* Display other item details as needed */}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
                <div className="checkout_subtotal">
                    {/* Subtotal component or logic here */}
                    <h2>The Subtotal here</h2>
                </div>
            </div>
        </div>
    );
}


export default Checkout;