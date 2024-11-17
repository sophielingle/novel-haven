import "../css/AdminForms.css";
import React, { useState } from "react";

const AddBook = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const addToServer = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const favoriteChapters = [
        inputs.favorite_chapters1,
        inputs.favorite_chapters2,
        inputs.favorite_chapters3,
    ];

    const formData = new FormData(event.target);
    formData.set("favorite_chapters", JSON.stringify(favoriteChapters));
    formData.delete("favorite_chapters1");
    formData.delete("favorite_chapters2");
    formData.delete("favorite_chapters3");
    console.log(...formData);

    const response = await fetch("https://novel-backend-6plv.onrender.com/api/books",{
      method:"POST",
      body:formData
    });

    if(response.status == 200){
      setResult("Book successfully added!");
    }
  };

  return (
    <div id="add-dialog">
        <form id="add-book-form" onSubmit={addToServer}>
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
        <p>
            <label htmlFor="favorite_chapters1">Favorite Chapter: </label>
            <input type="text" id="favorite_chapters1" name="favorite_chapters1" required value={inputs.favorite_chapters1 || ""} onChange={handleChange} />
        </p>
        <p>
            <label htmlFor="favorite_chapters2">Second Favorite Chapter: </label>
            <input type="text" id="favorite_chapters2" name="favorite_chapters2" required value={inputs.favorite_chapters2 || ""} onChange={handleChange} />
        </p>
        <p>
            <label htmlFor="favorite_chapters3">Third Favorite Chapter: </label>
            <input type="text" id="favorite_chapters3" name="favorite_chapters3" required value={inputs.favorite_chapters3 || ""} onChange={handleChange} />
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
  );
};

export default AddBook;