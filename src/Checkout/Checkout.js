import React from "react";
import "./Checkout.css";
import "./Subtotal"

function Checkout({ cart, removeFromCart }) {

    const calculateTotal = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

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
                    <h2>Total: ${calculateTotal(cart).toFixed(2)}</h2>
                    <h2>The Subtotal here</h2>
                </div>
            </div>
        </div>
    );
}


export default Checkout;