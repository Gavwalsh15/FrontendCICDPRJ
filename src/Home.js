import React from "react"
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className= "home" >
            <div className= "home_container">
                <img
                  className = "home_background"
                  src="https://images.pexels.com/photos/8941369/pexels-photo-8941369.jpeg"
                  //alt""
                  />

                <div className = "home_row">
                    <Product />
                    <Product />
                    <Product />

                    {/*Product*/}
                </div>

                <div className = "home_row">
                    <Product />
                    <Product />
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>

                <div className = "home_row">
                    <Product />
                    {/*Product*/}
                    {/*Product*/}
                </div>
        </div>
    </div>
    )
}

export default Home;