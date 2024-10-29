import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


const Layout = () => {
    return (
        <>
            <Header />

            <Link to="/">Home</Link>
            <Link to="/TopGenres">Top Genres</Link>
            <Link to="/BestSellers">Best Sellers</Link>
            <Link to="/Order">Order</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/admin">Admin</Link>



            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;