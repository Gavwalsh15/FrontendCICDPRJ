import React from "react";
import "./Checkout.css";


function Subtotal({ items, totalPrice }) {
    return (
        <div className="subtotal">
            {/*
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({items.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
                */}
        </div>
    );
}

export default Subtotal;
