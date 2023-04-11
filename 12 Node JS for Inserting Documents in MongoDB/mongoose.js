const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/local', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        const bookSchema = new Schema({
            name: String,
            author: String,
            year: Number
        });

        const Book = mongoose.model('books', bookSchema);

        // Insert documents into the collection
        const books = [
            { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
            { name: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
            { name: '1984', author: 'George Orwell', year: 1949 },
            { name: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
            { name: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', year: 1967 }
        ];

        Book.insertMany(books)
            .then((result) => {
                console.log(`${result.insertedCount} documents inserted`);

                // Order documents by name of the book
                Book.find().sort({ name: 1 })
                    .then((docs) => {
                        console.log(docs);

                        // Close the MongoDB connection
                        mongoose.connection.close();
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            })
            .catch((err) => {
                console.error(err);
            });
    })
    .catch((err) => {
        console.error(err);
    });
