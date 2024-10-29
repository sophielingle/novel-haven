import "../css/Contact.css";

const Contact = () => {
    return (
        <section id="content">
            <div id="contact-content">
                <h1>Contact Us</h1>
                <hr />
                <section className="columns">
                    <p className="three">Our store would love to hear from you! Whether you have questions about our available book selections, need help making a selection, or just want to contact us to provide oyur thoughts and feedback, please reach out. You can contact us through our email or phone number. Using the information provided below, feel free to visit us in-person at our physical store location. We have connections through social media platforms such as Instagram if you would like to stay updated on events. Enjoy your reading adventure!</p>
                    <img className="contact-img" src="images/store.jpeg" alt="Store"></img>
                </section>
                <h2>Our Location</h2>
                <hr />
                <section className="columns">
                    <div className="one">
                        <img className="contact-img" src="images/location.png" alt="Store"></img>
                    </div>
                    <div className="one">
                        <p>123 Main Street</p>
                        <p>Place, South Carolina, 12345</p>
                        <p>(123)-456-7890</p>
                        <p>Store Hours:</p>
                        <p>Monday-Friday: 10 AM - 7 PM</p>
                        <p>Saturday-Sunday: 9 AM - 5 PM</p>
                    </div>
                </section>

                <section className="info-section">
                <h2>Contact Form</h2>
                <hr />
                <div className="columns">
                    <p>A form and an iFrame go here.</p>
                </div>
                </section>
            </div>
        </section>
    );
};

export default Contact;