import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [NavbarListMenu, setNavbarListMenu] = useState("ulListMenu");
  const [NumberOfClickMenu, setNumberOfClickMenu] = useState(1);
  const navigate = useNavigate();

  const UserLogin = localStorage.getItem("userLogin");
  const handelClickMenu = () => {
    if (NumberOfClickMenu === 1) {
      setNavbarListMenu("NavbarListMenu");
      setNumberOfClickMenu(2);
    }

    if (NumberOfClickMenu === 2) {
      setNavbarListMenu("ulListMenu");
      setNumberOfClickMenu(1);
    }
  };

  const handelLogOut = () => {
    localStorage.removeItem("userLogin");
    //     localStorage.removeItem('TimeSelected');
    //     localStorage.removeItem('SelectedServices')
    navigate("/LoginPage");
  };

  return (
    <div className="Navbar">
      <div className="NavbarImg">
        <h1>Donate</h1>
      </div>

      {UserLogin ? (
        <div className="NavbarList">
          <ul className="ulList">
            <li className="NavbarListLi">
              <Link to={"/"}>Home </Link>
            </li>
            <li className="NavbarListLi">Volunteers</li>
            <li className="NavbarListLi">Donors</li>
            <li className="NavbarListLi">Beneficiaries</li>
            <li className="NavbarListLi"><Link to={"ContactUsPage"}>ContactUs</Link></li>
            <li className="NavbarListLi">
              <button onClick={handelLogOut}>LogOut</button>
            </li>

            <li className="Menu">
              <i className="fas fa-bars" onClick={handelClickMenu}></i>

              <ul className={NavbarListMenu}>
                <div>
                  <li>
                    <Link to={"/"}>Home </Link>
                  </li>
                  <li>Volunteers</li>
                  <li>Donors</li>
                  <li>Beneficiaries</li>
                  <li><Link to={"ContactUsPage"}>ContactUs</Link></li>

                  <li>
                    <button onClick={handelLogOut}>LogOut</button>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      ) : (
        <div className="NavbarList">
          <ul className="ulList">
            <li className="NavbarListLi">
              <Link to={"/"}>Home </Link>
            </li>
            <li className="NavbarListLi">Volunteers</li>
            <li className="NavbarListLi">Donors</li>
            <li className="NavbarListLi">Beneficiaries</li>
            <li className="NavbarListLi"><Link to={"ContactUsPage"}>ContactUs</Link></li>

            <li className="NavbarListLi">
              <Link to={"./LoginPage"}> Login</Link>
            </li>
            <li className="NavbarListLi"></li>

            <li className="Menu">
              <i className="fas fa-bars" onClick={handelClickMenu}></i>

              <ul className={NavbarListMenu}>
                <div>
                  <li>Home</li>
                  <li>Volunteers</li>
                  <li>Donors</li>
                  <li>Beneficiaries</li>
                  <li><Link to={"ContactUsPage"}>ContactUs</Link></li>

                  <li>
                    <Link to={"./LoginPage"}> Login</Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
