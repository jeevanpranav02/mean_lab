const mongoose = require('mongoose');

// Create a schema for the product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name"] // Product name is required
    },
    price: {
        type: Number,
        required: [true, "Please enter a product price"] // Product price is required
    },
    quantity: {
        type: Number,
        required: [true, "Please enter a product quantity"], // Product quantity is required
        default: 0 // Set the default value for quantity as 0
    },
}, { timestamps: true }); // Add timestamps to the schema

// Create the product model
const product = mongoose.model('Product', productSchema);

// Export the product model
module.exports = product;
