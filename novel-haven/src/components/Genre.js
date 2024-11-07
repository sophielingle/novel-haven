
const Genre = (genreDiv) => {
    return (
        <div className="one genre-single">
            <img className="contact-img" src={genreDiv.image} alt={genreDiv.alt} />
            <h2>{genreDiv.title}</h2>
            <p>
                {genreDiv.description}  
            </p>
        </div>
    );
};

export default Genre;