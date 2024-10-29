import "../css/Admin.css";

const Admin = () => {
    return (
        <section id="content">
            <div id="form-content" className="center-form">
                <h1>Add a Book to Our Database</h1>
                <hr />
                <h3>Please enter the information for the book you would like to add.</h3>
                <p>A form goes here.</p>
            </div>
            <p></p>
            <div id="form-content" class="center-form">
                <h1>Delete a Book from the Database</h1>
                <hr />
                <h3>Please enter the information for the book you would like to remove.</h3>
                <p>A form goes here.</p>
            </div>
        </section>
    );
};

export default Admin;