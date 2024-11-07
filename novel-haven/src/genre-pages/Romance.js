import "../css/Genre.css";
import BooksByGenre from "../components/BooksByGenre.js";

const Romance = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Romance Novels</h1>
                <hr />
                <section id="book-section">
                    <BooksByGenre genre="Romance"/>
                </section>
            </div>
        </section>
    );
};

export default Romance;