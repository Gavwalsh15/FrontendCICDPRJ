import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link

function Header() {
    return (
        <div className="header">
            <Link to="/checkout">
                <button className="basket_button">Go to Checkout</button>
            </Link>
        </div>
    );
}

export default Header;
