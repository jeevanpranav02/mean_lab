// VIDEO LINK FOR THE SAME : https://youtu.be/9OfL9H6AmhQ


const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel');

const app = express();

app.use(express.json());

// Handle GET requests to the root path
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle POST requests to create a new product
app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Handle GET requests to retrieve all products
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Handle GET requests to retrieve a single product by ID
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({ product });
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });
    }
});

// Handle PUT requests to update a product by ID
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        // If the product doesn't exist, return a 404 error
        if (!product) {
            return res.status(404).json({ message: `Product not found with ID : ${id}` });
        }

        // Fetch and return the updated product
        const updatedProduct = await Product.findById(id);
        res.status(200).json({ updatedProduct });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Handle DELETE requests to delete a product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        // If the product doesn't exist, return a 404 error
        if (!product) {
            return res.status(404).json({ message: `Product not found with ID : ${id}` });
        }

        // Return a success message if the product is deleted
        res.status(200).json({ message: `Product deleted successfully` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Connect to the database and start the server
mongoose
    .connect('mongodb://0.0.0.0:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server listening at http://localhost:3000');
        });
    }).catch((err) => { console.log(err) });
