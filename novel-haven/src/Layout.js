import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/Layout.css";

const Layout = () => {
    return (
        <>
            <Header />
            
            <div id="content">
                <section id="nav-bar">
                    <nav id="main-nav">
                        <div id="toggle-nav">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul id="nav-items" className="columns hidden-small">
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