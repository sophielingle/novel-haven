import "../css/Home.css";

const Home = () => {
    return (
        <div id="content">
            <img id="main-img" src="images/novel-haven.jpg" alt="Novel Haven Bookstore"/>
            <section id="home-content">
                <h2>About Us</h2>
                <hr />
                <p>
                Welcome to our online bookstore! Novel Haven is a new and rising book shop in the Columbia, South Carolina area. As of August 28th, 2024, we are officially open for business! Our collection includes books from many different genres, and a variety of themes. Feel free to browse through our top genres, which are the categories the most books are commonly sold from, and our five best sellers of the month! Additionally, you can check out our contact information, whether you would like to leave a review or find our address to come visit us in person!
                </p>
                <div className="columns">
                    <img className="home-img" src="images/about1.jpg" alt="Novel Haven" />
                    <img className="home-img" src="images/book.jpg" alt="Novel Haven" />
                </div>
            </section>
        </div>
    );
};

export default Home;