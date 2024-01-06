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
                  />

                <div className = "home_row">
                    <Product />
                    <Product />
                    <Product />

                    {/*Product*/}
                </div>

                <div className = "home_row">
                    <Product
                        id="12"
                        title = "4090"
                        price = {20000}
                        image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fb2c-contenthub.com%2Fwp-content%2Fuploads%2F2022%2F10%2FNvidia-GeForce-RTX-4090-1.jpg%3Fquality%3D50%26strip%3Dall&f=1&nofb=1&ipt=d56dcae6167cf3f45289fd475e78e9496f8689e3fb3e4516f8f30b6093156a33&ipo=images"
                    />
                    <Product
                        id="123"
                        title={"James Web Telescope"}
                        price={10}
                        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscreenshot9.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fjames-webb-telescope-preparation.jpg&f=1&nofb=1&ipt=660d5da7494c1b916f879369f624e3edeb74d9ad7faee3bf9dbb757438450666&ipo=images"
                    />

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