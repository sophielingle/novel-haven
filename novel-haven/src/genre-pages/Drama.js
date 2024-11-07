import "../css/Genre.css";
import BooksByGenre from "../components/BooksByGenre.js";

const Drama = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Drama Novels</h1>
                <hr />
                <section id="book-section">
                <BooksByGenre genre="Drama"/>
                </section>
            </div>
        </section>
    );
};

export default Drama;