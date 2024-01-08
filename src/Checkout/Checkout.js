import React from "react";
import "./Checkout.css";
import "./Subtotal"

function Checkout({ cart, removeFromCart }) {
    return ( 
        <div className = "checkout">
            <div className="checkout_viewbasket">
                   <h2  className="checkout_title">
                       Your Shopping Cart </h2>

                    {cart.map(item => (
                        <div key={item.id}>


                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}

                 <button onClick={() => removeFromCart(item.id)}>Remove</button>

                 <div className="checkout_subtotal">
                {/*
                    <Subtotal>
                         <Subtotal items={cartItems} totalPrice={calculateTotal(cartItems)} />
                     </Subtotal>
                */}
                    <h2>The Subtotal here</h2>
             </div>
        </div>
      ))}
    </div>
    );
}

export default Checkout;