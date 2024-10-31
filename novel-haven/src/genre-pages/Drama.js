import "../css/Genre.css";
import {Link} from "react-router-dom";
import PartialBook from "../components/PartialBook.js";

const Drama = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Top Drama Novels</h1>
                <hr />
                <section id="book-section">
                <Link to="/book1">
                    <PartialBook title="The Housemaid is Watching" 
                    image="images/watching.jpg" 
                    alt="The Housemaid Is Watching" 
                    author="Freida McFadden" 
                    description="You must be our new neighbors!” Mrs. Lowell gushes and waves across the picket fence. I clutch my daughter’s hand and smile back: but the second Mrs. Lowell sees my husband a strange expression crosses her face. In that moment I make a promise. We finally have a family home. My past is far, far behind us. And I’ll do anything to keep it that way…" >
                    </PartialBook>
                </Link>
                <p>Books are stored in a JSON file.</p>
                </section>
            </div>
        </section>
    );
};

export default Drama;