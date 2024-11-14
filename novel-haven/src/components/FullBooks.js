import { useState, useEffect } from "react";
import axios from "axios";
import FullBook from "./FullBook";  

const FullBooks = ({ id }) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://novel-backend-6plv.onrender.com/api/books");
                //const response = await axios.get("http://localhost:3001/api/books");
                const matchingBook = response.data.find((book) => book.id == id);
                setBook(matchingBook);
            } catch (error) {
                console.error("Error fetching book data:", error);
            }
        })();
    }, [id]);

    if (!book) return (null); 

    return (
        <div>
            <FullBook
                image={book.image}
                alt={book.alt || "Book Cover"}
                title={book.title}
                author={book.author}
                publication_year={book.publication_year}
                genre={book.genre}
                extended_description={book.extended_description}
                price={book.price}
                chapter1={book.favorite_chapters[0]}
                chapter2={book.favorite_chapters[1]}
                chapter3={book.favorite_chapters[2]}
            />
        </div>
    );
};

export default FullBooks;