import "../css/Admin.css";
import AddBook from "../components/AddBook.js";

const Admin = () => {
    return (
        <section id="content">
            <div id="form-content" className="center-form">
                <h1>Add a Book to Our Database</h1>
                <hr />
                <h3>Please enter the information for the book you would like to add.</h3>
                <AddBook />
            </div>
            <p></p>
        </section>
    );
};

export default Admin;