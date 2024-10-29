import "../css/Book.css";

const PartialBook = (book) => {
    return (
        <div className="best-seller">
            <section className="columns">
                <img className="one" src={book.image} alt={book.alt}></img>
                <div className="four">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                </div>
            </section>
        </div>
    );
};

export default PartialBook;