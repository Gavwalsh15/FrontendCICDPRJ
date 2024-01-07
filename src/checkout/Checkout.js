import React from "react";
import "./Checkout.css";

function Checkout() {
    return ( <div className = "checkout">
            <div className="checkout_viewbasket">
                <div>
                   <h2  className="checkout_title">
                       Your Shopping Cart </h2>

                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}
                        {/* BasketItem */}

                </div>
                 <div className="checkout_subtotal">
                     <Subtotal>
                         <Subtotal items={cartItems} totalPrice={calculateTotal(cartItems)} />
                     </Subtotal>
                    <h2>The Subtotal here</h2>
             </div>
            </div>
    </div>
    );
}

export default Checkout;