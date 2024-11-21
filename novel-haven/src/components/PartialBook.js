import "../css/Book.css";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import EditBook from "./EditBook.js";
import DeleteBook from "./DeleteBook.js";

const PartialBook = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [book, setBook] = useState(props);
    const [showBook, setShowBook] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };

    const closeEditDialog = () => {
        setShowEditDialog(false);
    };

    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };

    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };

    const hideBook = () => {
        setShowBook(false);
    }

    const editBook = (newBook) => {
        setBook(newBook);
    };  

    return (
        <>
        {showBook ? (
          <div>
            {showDeleteDialog ? (
              <DeleteBook
                closeDialog={closeDeleteDialog}
                hideBook = {hideBook}
                title={book.title}
                _id={book._id}
              />
            ) : (
              ""
            )}
  
            {showEditDialog ? (
              <EditBook
                closeDialog={closeEditDialog}
                updateBook = {editBook}
                _id={book._id}
              />
            ) : (
              ""
            )}
  
            <section id="change-buttons">
                <a href="#" onClick={openEditDialog}>
                    &#9998;
                </a>
                <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                </a>
            </section>
            <Link to={"/book/" + book._id}>
                <div className="best-seller">
                    <section className="columns">
                        <img className="one" src={"https://novel-backend-6plv.onrender.com/images/" + book.image} alt={book.alt}></img>
                        <div className="four">
                            <h2>{book.title}</h2>
                            <h3>{book.author}</h3>
                            <p>{book.description}</p>
                        </div>
                    </section>
                </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };

export default PartialBook;