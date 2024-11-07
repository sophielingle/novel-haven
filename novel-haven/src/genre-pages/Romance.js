import "../css/Genre.css";
import PartialBook from "../components/PartialBook.js";

const Romance = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Romance Novels</h1>
                <hr />
                <section id="book-section">
                    <PartialBook 
                    link="/book1"
                    title="The Housemaid is Watching" 
                    image="images/watching.jpg" 
                    alt="The Housemaid Is Watching" 
                    author="Freida McFadden" 
                    description="You must be our new neighbors!” Mrs. Lowell gushes and waves across the picket fence. I clutch my daughter’s hand and smile back: but the second Mrs. Lowell sees my husband a strange expression crosses her face. In that moment I make a promise. We finally have a family home. My past is far, far behind us. And I’ll do anything to keep it that way…" >
                    </PartialBook>
                <p>Books are stored in a JSON file.</p>
                </section>
            </div>
        </section>
    );
};

export default Romance;