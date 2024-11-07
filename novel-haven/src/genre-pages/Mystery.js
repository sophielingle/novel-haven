import "../css/Genre.css";
import BooksByGenre from "../components/BooksByGenre.js";

const Mystery = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Mystery Novels</h1>
                <hr />
                <section id="book-section">
                    <BooksByGenre genre="Mystery"/>
                </section>
            </div>
        </section>
    );
};

export default Mystery;