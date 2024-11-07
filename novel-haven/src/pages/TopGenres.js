import "../css/TopGenres.css";
import {Link} from "react-router-dom";
import Genre from "../components/Genre.js";

const TopGenres = () => {
    return (
        <section id="content">
            <div id="genre-page">
                <h1>Top Genres</h1>
                <hr />
                <div className="genre-content">
                    <section className="columns genre">
                        <Link to="/horror">
                            <Genre 
                            image="images/horror.jpg" 
                            alt="Horror Genre" 
                            title="Horror" 
                            description="The horror genre often revolves around a main protagonist forced into a situation where they must try to survive. The entity causing their distress can be one of a supernatural, psychological, or human origin."> 
                            </Genre>
                        </Link>
                        <Link to="/drama">
                            <Genre 
                            image="images/drama.jpg" 
                            alt="Drama Genre" 
                            title="Drama" 
                            description="The drama genre can include anything between thriller and slice-of-life. Whether it's in a situation where the characters are fighting to survive or just trying to get through the work day, there is drama around the protagonist."> 
                            </Genre>
                        </Link>
                    </section>
                </div>
                <div className="genre-content">
                    <section className="columns genre">
                        <Link to="/mystery">
                            <Genre 
                            image="images/mystery.jpg" 
                            alt="Mystery Genre" 
                            title="Mystery" 
                            description="The mystery genre can both fit into the stereotype of a detective solving a series of related crimes, or it can be more abstract, such as a paranormal occurrence causing havoc, and the protagonist must figure out why."> 
                            </Genre>
                        </Link>
                        <Link to="/romance">
                            <Genre 
                            image="images/romance.jpg" 
                            alt="Romance Genre" 
                            title="Romance" 
                            description="Romance novels involve the main character falling for their perfect companion. Whether or not there is a love triangle or a dramatic trope carrying the plot, there is mostly a guaranteed happy ending."> 
                            </Genre>
                        </Link>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default TopGenres;