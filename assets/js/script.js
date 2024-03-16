// Function to handle adding a product to the cart
function addToCart(productId) {
    // Retrieve product information based on the productId
    // For example, you can fetch product details from an array or an API

    // Add product to cart (example: console.log for demonstration)
    console.log(`Product added to cart: ${productId}`);
}

// Add event listener to the document
document.addEventListener('click', function(event) {
    // Check if the clicked element is a "Add to Cart" button
    if (event.target.classList.contains('button')) {
        // Get the product ID from the data-id attribute of the button
        const productId = event.target.getAttribute('data-id');
        // Call the addToCart function with the product ID
        addToCart(productId);
    }
});