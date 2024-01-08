// purchaseService.js
const handleBuyNow = async (cart, calculateTotal) => {
    const totalAmount = calculateTotal(cart);

    try {
        const response = await fetch('/buynow', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items: cart,
                total: totalAmount,
            }),
        });

        if (response.ok) {
            console.log("Purchase successful");
        } else {
            console.error("Purchase failed");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

export default handleBuyNow;
