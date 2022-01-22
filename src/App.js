import { Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import HomePage from "./page/HomePage";
import ContactUsPage from "./page/ContactUsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/RegisterPage'} element={<RegisterPage/>}/>
      <Route path={'/LoginPage'} element={<LoginPage/>}/>
      <Route path={'/ContactUsPage'} element={<ContactUsPage/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
