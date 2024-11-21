import "../css/Book.css";

const FullBook = (book) => {
    return (
        <div id="content">
            <h1 className="center">{book.title}</h1>
            <hr />
            <div className="best-seller">
                <section className="columns">
                    <img className="book-img one" src={"https://novel-backend-6plv.onrender.com/images/" + book.image} alt={book.alt}></img>
                    <div className="info four">
                        <h2>Title: {book.title}</h2>
                        <h3>Author: {book.author}</h3>
                        <p>Publication Year: {book.publication_year}</p>
                        <p>Genre: {book.genre}</p>
                    </div>
                </section>
                <p>{book.extended_description}</p>
                <p>Price: {book.price}</p> 
                <h3>Our Favorite Chapters: </h3>
                <ul>
                    <li>Chapter {book.chapter1}</li>
                    <li>Chapter {book.chapter2}</li>
                    <li>Chapter {book.chapter3}</li>
                </ul>
            </div> 
        </div>
    );
};

export default FullBook;