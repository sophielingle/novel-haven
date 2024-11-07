import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";

const Layout = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(prevState => !prevState);
    };

    return (
        <>
            <Header />
            
            <div id="content">
                <section id="nav-bar">
                    <nav id="main-nav">
                        <div id="toggle-nav" onClick={toggleNav}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul
                            id="nav-items"
                            className={`columns ${navOpen ? 'open' : ''}`}
                        >
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/topgenres">TOP GENRES</Link></li>
                            <li><Link to="/bestsellers">BEST SELLERS</Link></li>
                            <li><Link to="/order">ORDER</Link></li>
                            <li><Link to="/admin">ADMIN</Link></li>
                            <li><Link to="/contact">CONTACT US</Link></li>
                        </ul>
                    </nav>
                </section>
            </div>

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;