import "../css/Genre.css";
import BooksByGenre from "../components/BooksByGenre.js";

const Horror = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Horror Novels</h1>
                <hr />
                <section id="book-section">
                    <BooksByGenre genre="Horror"/>
                </section>
            </div>
        </section>
    );
};

export default Horror;