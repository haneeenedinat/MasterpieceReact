import React, { useState } from "react";
import "./Login.css";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  // const [Login, setLogin] = useState(false);
  const [ErrorMessage,setErrorMessage]=useState();

  const handleSubmit = (e) => {
    e.preventDefault();


    for (let i = 0; i < localStorage.length; i++) {
      let userEmail = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (userEmail.Email === Email && userEmail.Password === Password) {
        console.log(userEmail);
        console.log("logined");
        swal({
          title: "Completed!",
          text: "logged in",
          buttons: "ok",
        });
        //   logout required
        localStorage.setItem(  "userLogin", JSON.stringify(userEmail));
        setTimeout(()=>{
          navigate("/");
          },3000)
     
        break;
      } else {
        setErrorMessage("The Email or password incorret");
      }
    }
  };

  return (
    <div
      className="LoginContainer"
      style={{
        background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 0, 0)), url('../assets/img11.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3>Login Form</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
         <strong>{ErrorMessage}</strong>
        <Link to={"/RegisterPage"}>You Don't Have An Account ? Register</Link>
        <button type="submit">Login </button>
      </form>
    </div>
  );
}

export default Login;
