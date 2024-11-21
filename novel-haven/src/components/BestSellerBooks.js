import React, { useState, useEffect } from "react";
import "../css/BestSellers.css";
import PartialBook from "./PartialBook.js";
import axios from "axios";

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://novel-backend-6plv.onrender.com/api/books");
            //const response = await axios.get("http://localhost:3001/api/books");
            const bestSellers = response.data.filter((book) => book.bestSeller === "yes");
            setBooks(bestSellers);
        })();
    }, []);

    return (
        <>
            {books.map((book) => (
                <PartialBook
                    link={book.link}
                    _id={book._id}
                    image={book.image}
                    alt={book.alt || "Book Cover"}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                />
            ))}
        </>
    );
};

export default BestSellerBooks;