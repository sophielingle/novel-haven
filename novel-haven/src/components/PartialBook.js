import "../css/Book.css";
import {Link} from "react-router-dom";

const PartialBook = (book) => {
    return (
        <Link to={"/book/" + book.id}>
            <div className="best-seller">
                <section className="columns">
                    <img className="one" src={"https://novel-backend-6plv.onrender.com/images/" + book.image} alt={book.alt}></img>
                    <div className="four">
                        <h2>{book.title}</h2>
                        <h3>{book.author}</h3>
                        <p>{book.description}</p>
                    </div>
                </section>
            </div>
        </Link>
    );
};

export default PartialBook;