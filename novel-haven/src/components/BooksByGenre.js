import React, { useState, useEffect } from "react";
import "../css/BestSellers.css";
import PartialBook from "./PartialBook.js";
import axios from "axios";

const BooksByGenre = ({ genre, sectionId }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://novel-backend-6plv.onrender.com/api/books");
            //const response = await axios.get("http://localhost:3001/api/books");
            const genreBooks = response.data.filter((book) => book.genre === genre);
            setBooks(genreBooks);
        })();
    }, [genre]);

    return (
        <section id={sectionId}>
            {books.map((book) => (
                <PartialBook
                    _id={book._id}
                    image={book.image}
                    alt={book.alt || "Book Cover"}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                />
            ))}
        </section>
    );
};

export default BooksByGenre;