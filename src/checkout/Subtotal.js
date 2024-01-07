import React from "react";
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal({ items, totalPrice }) {
    return (
        <div className="subtotal">
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
        </div>
    );
}

export default Subtotal;
