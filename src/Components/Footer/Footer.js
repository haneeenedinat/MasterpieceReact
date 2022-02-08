import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer (){
   return(
      <div className="Footer">

          <div className="FooterInformation">

         <div className="FooterpageLink">
            <ul>
            <li><h3>Page links</h3></li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"./DonorsPage"}>Donors</Link></li>
            <li>Beneficiaries</li>
            </ul>
         </div>

         <div className="FooterContactUs">
            <ul>
            <li><h3>Contact Us</h3></li>
            <li>Address :Jordan-Amman </li>
            <li>Phone: 0777745263</li>
            <li> Email: Donate@gmail.com </li>
            </ul>
         </div>

         <div className="FooterSocialMedia">
         <ul> 
            <h3>Social Media</h3>
            <li > <a href="https://twitter.com/" className="twitter"><i className="fab fa-twitter"></i></a>
             <a href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook"></i></a>
             <a href="https://www.instagram.com/" className="instagram"><i className="fab fa-instagram"></i></a >
             <a href="https://www.linkedin.com/feed/" className="linkedin"><i className="fab fa-linkedin"></i></a>
             <a href="https://github.com/haneeenedinat" className="github"><i class="fab fa-github"></i></a>

      
            </li>
            </ul>
         </div>

         </div>

         <div className="FooterCopyright">
            <p>&copy;2022 Donate</p>
         </div>

      </div>
   )
}