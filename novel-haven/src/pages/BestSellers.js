import "../css/BestSellers.css";
import BestSellerBooks from "../components/BestSellerBooks.js";


const BestSellers = () => {
    return (
        <section id="content">
            <div id="main-content">
                <h1 className="center">Best Sellers</h1>
                <hr />
                <section id="book-section">
                
                    <BestSellerBooks />
                </section>
            </div>
        </section>
    );
};

export default BestSellers;