import "../css/TopGenres.css";
import {Link} from "react-router-dom";

const TopGenres = () => {
    return (
        <section id="content">
            <div id="genre-page">
                <h1>Top Genres</h1>
                <hr />
                <div className="genre-content">
                    <section className="columns genre">
                        <Link to="/horror">
                            <div className="one genre-single">
                                <img className="contact-img" src="images/horror.jpg" alt="Horror genre" />
                                <h2>Horror</h2>
                                <p>
                                    The horror genre often revolves around a main protagonist forced into a situation where they must try to survive. The entity causing their distress can be one of a supernatural, psychological, or human origin.  
                                </p>
                            </div>
                        </Link>
                        <Link to="/drama">
                            <div className="one genre-single">
                                <img className="contact-img" src="images/drama.jpg" alt="Drama genre" />
                                <h2>Drama</h2>
                                <p>
                                    The drama genre can include anything between thriller and slice-of-life. Whether it's in a situation where the characters are fighting to survive or just trying to get through the work day, there is drama around the protagonist.
                                </p>
                            </div>
                        </Link>
                    </section>
                </div>
                <div className="genre-content">
                    <section className="columns genre">
                        <Link to="/mystery">
                            <div className="one genre-single">
                                <img className="contact-img" src="images/mystery.jpg" alt="Mystery genre" />
                                <h2>Mystery</h2>
                                <p>
                                    The mystery genre can both fit into the stereotype of a detective solving a series of related crimes, or it can be more abstract, such as a paranormal occurrence causing havoc, and the protagonist must figure out why.
                                </p>
                            </div>
                        </Link>
                        <Link to="/romance">
                            <div className="one genre-single">
                                <img className="contact-img" src="images/romance.jpg" alt="Romance genre" />
                                <h2>Romance</h2>
                                <p>
                                    Romance novels involve the main character falling for their perfect companion. Whether or not there is a love triangle or a dramatic trope carrying the plot, there is mostly a guaranteed happy ending.
                                </p>
                            </div>
                        </Link>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default TopGenres;