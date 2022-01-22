import React from "react";
import "./ContactUs.css";
import swal from "sweetalert";
import { useNavigate } from "react-router";

export default function ContactUs() {
  const navigate=useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Completed!",
      text: "Thank you for your message, we will contact with you soon.",
      buttons: "ok",
    });
    e.target.reset();



    setTimeout(()=>{
      navigate("/");
      },2000)
    
  };

  return (
    <div className="ContactUs">
      <div className="ContactUsh2">
        <h2>how we can help you</h2>
      </div>

      <div className="ContactUsImgForm">
        <div>
          <img src="../assets/ContactUs2.png" alt="ContactUs Img" />
        </div>
        <div className="ContactUsForm">
          <form onSubmit={handelSubmit}>
            <input type="text" placeholder="Your Name"  required/>
            <input type="email" placeholder="you@example.com" required/>
            <textarea type="text" placeholder="Tell us" required/>
            <button >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
