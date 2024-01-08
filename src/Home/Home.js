import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/ad/getads');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []); 

  const renderProductsInRows = () => {
    const rows = [];
    for (let i = 0; i < products.length; i += 3) {
      const rowProducts = products.slice(i, i + 3);
      const rowElements = rowProducts.map((product) => (
        <Product
          key={product.id}
          sellerEmail={product.sellerEmail}
          title={product.title}
          adImageLink={product.adImageLink}
          price={product.price}
          description={product.description}
          createDate={product.createDate}
          addToCart={() => addToCart(product)}
        />
      ));

      rows.push(
        <div key={i} className="home_row">
          {rowElements}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="home">
      <div className="home_container">
        {renderProductsInRows()}
      </div>
    </div>
  );
}

export default Home;








 {/*
function Home() {
    return (
        <div className= "home" >
            <div className= "home_container">
                  {/*
                    Can uncomment later idk what the story is with it tho
                  <img
                  className = "home_background"
                src="https://images.pexels.com/photos/8941369/pexels-photo-8941369.jpeg"
                  />

                <div className = "home_row">
                    <Product />
                    <Product />
                    <Product />

                
                </div>

                <div className = "home_row">
                    <Product
                    />
                    <Product
                    />

                
                </div>

                <div className = "home_row">
                    <Product />
                  
                </div>
        </div>
    </div>
    )

}
*/}



