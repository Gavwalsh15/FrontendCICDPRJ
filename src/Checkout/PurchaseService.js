const handleBuyNow = async (cart) => {
    try {
        for (const product of cart) {
          const response = await fetch("http://localhost:8081/api/ad/buyproduct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sellerEmail: product.sellerEmail,
              buyerEmail: localStorage.getItem("loggedEmail"),
              productTitle: product.title,
              amount: product.price,
              createDate: product.createDate,
              time: new Date().toISOString(),
            }),
          });
    
          if (response.ok) {
            console.log("Product purchased successfully");
            window.location.href = "/";
          } else {
            console.error("Failed to purchase product");
            document.getElementById("error").innerHTML = await response.text();
          }
        }
      } catch (error) {
        console.error("Error during product purchase:", error);
      }
    };
    

export default handleBuyNow;
