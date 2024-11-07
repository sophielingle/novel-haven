import "../css/Form.css"; 
import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "da73d78f-475a-451d-9d20-2ded93e8651a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error: Could Not Send", data);
        setResult(data.message);
      }
    };
  
    return (
      <div>
        <form onSubmit={onSubmit}>
            <p>
            <label for="name">Name: </label>
            <input 
            id="name"
            type="text"
            placeholder="First and Last"
            name="name"
            required/>
            </p>

            <p>
            <label for="email">Email: </label>
            <input 
            id="email" 
            type="email" 
            name="email" 
            required/>
            </p>
            
            <p>
            <label for="message">Message: </label>
            <textarea id="message" name="message" required></textarea>
            </p>
          
            <p>
                <button type="submit">Send Message</button>
            </p>
        </form>
        <span>{result}</span>
  
      </div>
    );
  }