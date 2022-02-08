import React, { useEffect, useState } from "react";
import "./Donors.css";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

export default function Donors() {
  const navigate = useNavigate();

  const [ProductName, setProductName] = useState();
  const [ProductDescription, setProductDescription] = useState();
  // const [ProductImage, setProductImage] = useState();
  // const [CategoryTitle, setCategoryTitle] = useState();
  // const [Number, setNumber] = useState();
  // const [Address, setAddress] = useState();
  const [MessageProductName, setMessageProductName] = useState();
  const [MessageProductDescription, setMessageProductDescription] = useState();
  // const [MessagePassword, setMessagePassword] = useState();
  // const [MessageConfirmPassword, setMessageConfirmPassword] = useState();
  // const [MessageNumber, setMessageNumber] = useState();
  // const [SuccessfullyRegistered, setSuccessfullyRegistered] = useState("");
  let validation;

  const handelSubmit = (e) => {
    e.preventDefault();

    validation = 0;

    if (ProductName.length > 15) {
      setMessageProductName("long sentence length");
      validation += 1;
    } else setMessageProductName("");

    if (ProductDescription.length > 20) {
      setMessageProductDescription("long sentence length");
      validation += 1;
    } else setMessageProductDescription("");

    // if (Number.length !== 10) {
    //   setMessageNumber("Phone Number should be 10 digits");
    //   validation += 1;
    // } else setMessageNumber("");

    // for (let i = 0; i < localStorage.length; i++) {
    //   const emailUsed = JSON.parse(localStorage.getItem(localStorage.key(i)));

    //   if (emailUsed.Email === Email) {
    //     setMessageEmail("Email is already in use");
    //     validation += 1;
    //   }
    // }

    if (validation === 0) {
      // let user = {
      //   UserName: UserName,
      //   Email: Email,
      //   Password: Password,
      //   Number: Number,
      //   Address: Address,
      // };
      // localStorage.setItem(Email, JSON.stringify(user));

      swal({
        title: "Completed!",
        text: "Successfully Donors",
        buttons: "ok",
      });

      e.target.reset();

    //   setTimeout(() => {
    //     navigate("/loginPage");
    //   }, 3000);
    // }
  };
}


  return (
    // <div
    //   className="RegisterContainer"
    //   style={{
    //     background: `linear-gradient(190deg, #ffffff , rgba(0, 0, 0, 0)), url('../assets/img11.jpg')`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
     
    <div  className="DonorsContainer">
      <h3>Donors Form</h3>

      {/* <form onSubmit={handelSubmit}>


      <label for="product name">Product Name</label>
        <input
          type="text"
          name="product_name"
          placeholder="product name"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />


<label for="product description">product description</label>
        <input
          type="text"
          name="product_description"
          placeholder="product description"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />


         
   
      

        <p>{MessageUserName}</p>
        <label for="Category Title">Category Title</label>
        <select name="category_id" id=""  required>
          <option value="select..">Category Title</option> 
          <option value="select..">trouser...</option>
          <option value="select.."> Shirt...</option>
          <option value="select.."> blouse...</option>
        </select>

      
        <p>{MessageEmail}</p>

 
        <p>{MessagePassword}</p>

        <label for="Phone Number">Phone Number</label>
        <input
          type="tel"
          name="Number"
          placeholder="Phone Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <p>{MessageNumber}</p>


        <label for="Product Image">Product Image</label>
           <input
          type="file"
          name="product_img"
          class="form-control"
          placeholder="product img"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />


        <label for="Address">Address</label>
        <input
          type="text"
          name="Address"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />

          




        <Link to={"/LoginPage"}>You Have An Account ?Login</Link>
        <button type="submit">Donate</button>
        <p style={{ color: "green", fontWeight: "900", fontSize: "1.5em" }}>
          {SuccessfullyRegistered}
        </p>
      </form> */}
      <form onSubmit={handelSubmit}>
        <div class="form-group">
          <label for="add_product">Product Name</label>
          <input
            class="form-control"
            type="text"
            name="product_name"
            required
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <p>{MessageProductName}</p>
   
        <div class="form-group">
          <label for="add_product">Product description</label>
          <input class="form-control" type="text" name="product_description" required 
              onChange={(e) => {
                setProductDescription(e.target.value);
              }}/>
        </div>
         <p>{MessageProductDescription}</p>

        <div class="form-group">
          <label for="add_product">Product Image</label>
          <input class="form-control" type="file" name="product_img" required />
        </div>
        <div class="form-group">
          <label for="add_product">Category Title</label>
          <select name="category_id" id="" class="form-control" required>
            <option value="select">Category Title</option>
            <option value="trouser">trouser</option>
            <option value="Shirt"> Shirt</option>
            <option value="blouse"> blouse</option>
          </select>
        </div>

        <div class="form-group">
          <input
            class="btn btn-primary"
            type="submit"
            name="add_product_submit"
            value="Donors"
          />
        </div>
      </form>
    </div>
  );
}
