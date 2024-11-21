import "../css/Dialog.css";
import React, { useState } from "react";

const EditBook = (props) => {
  const [inputs, setInputs] = useState({
      _id: props._id,
      title: props.title,
      bestSeller: props.bestSeller,
      author: props.author,
      publication_year: props.publication_year,
      genre: props.genre,
      description: props.description,
      extended_description: props.extended_description,
      price: props.price,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.delete("favorite_chapters");
    formData.delete("favorite_chapters1");
    formData.delete("favorite_chapters2");
    formData.delete("favorite_chapters3");
    console.log(...formData);

    const response = await fetch(`https://novel-backend-6plv.onrender.com/api/books/${props._id}`,{
    //const response = await fetch(`http://localhost:3001/api/books/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200){
      setResult("Book successfully updated");
      event.target.reset();
      props.updateBook(await response.json());
      props.closeDialog();
    } else {
      setResult("Error editing your book. We're sorry");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          
        <form id="edit-property-form" onSubmit={onSubmit}>
        <p>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" required value={inputs.title || ""} onChange={handleChange} />
        </p>
        <p>
            <label htmlFor="bestSeller">Best Seller: </label>
            <select name="bestSeller" id="bestSeller" required value={inputs.bestSeller || ""} onChange={handleChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </p>
        <p>
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" required value={inputs.author || ""} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="publication_year">Publication Year: </label>
            <input type="text" id="publication_year" name="publication_year" required value={inputs.publication_year || ""} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="genre">Genre: </label>
            <select name="genre" id="genre" required value={inputs.genre || ""} onChange={handleChange}>
                <option value="Horror">Horror</option>
                <option value="Drama">Drama</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
            </select>
        </p>
        <p>
            <label htmlFor="description">Brief Description: </label>
            <input type="text" id="description" name="description" required value={inputs.description || ""} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="extended_description">Full Description: </label>
            <input type="text" id="extended_description" name="extended_description" required value={inputs.extended_description || ""} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="price">Price (include "$"): </label>
            <input type="text" id="price" name="price" required value={inputs.price || ""} onChange={handleChange}/>
        </p>

        <section className="columns">
            <p id="img-prev-section">
            <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
            </p>
            <p id="img-upload">
            <label htmlFor="img">Upload Image:</label>
            <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
            </p>
        </section>
        <p>
            <button type="submit">Submit</button>
        </p>
        <p>{result}</p>
        </form>

        </div>
      </div>
    </div>
  );
};

export default EditBook;