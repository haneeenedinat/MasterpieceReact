import React, { useEffect, useState } from "react";
import "./Register.css";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [Number, setNumber] = useState();
  const [Address, setAddress] = useState();
  const [MessageUserName, setMessageUserName] = useState();
  const [MessageEmail, setMessageEmail] = useState();
  const [MessagePassword, setMessagePassword] = useState();
  const [MessageConfirmPassword, setMessageConfirmPassword] = useState();
  const [MessageNumber, setMessageNumber] = useState();
  const [SuccessfullyRegistered, setSuccessfullyRegistered] = useState("");
  let validation;

  const handelSubmit = (e) => {
    e.preventDefault();

    validation = 0;

    if (Password.length < 6) {
      setMessagePassword("password should be more than 5 characters");
      validation += 1;
    } else setMessagePassword("");

    if (UserName == null) {
      setMessageUserName("please enter the UserName");
      validation += 1;
    } else setMessageUserName("");

    if (Password !== ConfirmPassword) {
      setMessageConfirmPassword("your passwords doesn't match");
      validation += 1;
    } else setMessageConfirmPassword("");

    if (Number.length !== 10) {
      setMessageNumber("Phone Number should be 10 digits");
      validation += 1;
    } else setMessageNumber("");

    for (let i = 0; i < localStorage.length; i++) {
      const emailUsed = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (emailUsed.Email === Email) {
        setMessageEmail("Email is already in use");
        validation += 1;
      }
    }

    if (validation === 0) {
      let user = {
        UserName: UserName,
        Email: Email,
        Password: Password,
        Number: Number,
        Address: Address,
      };
      localStorage.setItem(Email, JSON.stringify(user));

      swal({
        title: "Completed!",
        text: "Successfully Registered",
        buttons: "ok",
      });

    
      e.target.reset();

      setTimeout(()=>{
      navigate("/loginPage");
      },3000)
    }
  };

  return (
    <div
      className="RegisterContainer"
      style={{
        background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 0, 0)), url('../assets/img11.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3>Registration Form</h3>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="UserName"
          placeholder="UserName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <p>{MessageUserName}</p>

        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>{MessageEmail}</p>

        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p>{MessagePassword}</p>

        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <p>{MessageConfirmPassword}</p>
        {/* <input
          type="tel"
          name="Number"
          placeholder="Phone Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        /> */}
        {/* <p>{MessageNumber}</p>
        <input
          type="text"
          name="Address"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        /> */}

        <Link to={"/LoginPage"}>You Have An Account ?Login</Link>
        <button type="submit">Register</button>
        <p style={{ color: "green", fontWeight: "900", fontSize: "1.5em" }}>
          {SuccessfullyRegistered}
        </p>
      </form>
    </div>
  );
}
