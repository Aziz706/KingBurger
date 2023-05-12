import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Section33 from "./components/Section-3/Section-33";
import Section3id from "./components/Section-3/Section-3id";
import Section4id from "./components/Section-4Pizza/Section-4id";
import Section5id from "./components/Section-5FriedChick/Section-5id";
import Section6id from "./components/Section-6IceCream/Section-6id";
import Section7id from "./components/Section-7Desserts/Section-7id";
import Section8id from "./components/Section-8Drinks/Section-8id";
import Footer from "./components/Footer/Footer"
import Section44 from "./components/Section-4Pizza/Section-44";
import Section55 from "./components/Section-5FriedChick/Section-55";
import Section66 from "./components/Section-6IceCream/Section-66";
import Section77 from "./components/Section-7Desserts/Section-77";
import Section88 from "./components/Section-8Drinks/Section-88";
import User from "./components/User/User";
import NonePage from "./components/User/Pages/404Page";
import Page from "./components/User/Pages/UserPage";
import { SignUp } from "./components/User/Pages/SignUp";
import { SignIn } from "./components/User/Pages/SignIn";
import { ForgotPassword } from "./components/User/Pages/ForgotPassword";
import ErrorPage from "./components/User/Pages/ErrorPage";

function App() {
  const navigate = React.useNavigate()
  const [token, setToken] = React.useState("")

  React.useEffect(() => {
    navigate("/")
  }, [])
  React.useEffect(() => {
    let tok = localStorage.getItem("token")
    if(tok) {
      setToken(tok)
    }  
  }, [token])

  function logOut(params) {
   localStorage.removeItem("token") 
  }
  return (
    <div className="App">
      <Header token={token} logOut={logOut} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burgers" element={<Section33 />} />
        <Route path="/burgers/:id" element={<Section3id />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/pizzas" element={<Section44 />} />
        <Route path="/pizzas/:id" element={<Section4id />} />
        <Route path="/fried-chicken" element={<Section55 />} />
        <Route path="/fried-chicken/:id" element={<Section5id />} />
        <Route path="/ice-cream" element={<Section66 />} />
        <Route path="/ice-cream/:id" element={<Section6id />} />
        <Route path="/desserts" element={<Section77 />} />
        <Route path="/desserts/:id" element={<Section7id />} />
        <Route path="/drinks" element={<Section88 />} />
        <Route path="/drinks/:id" element={<Section8id />} />
        <Route path='/users' element={<Page />} />   
            <Route path={"/sign-up"} element={<SignUp />} />
            <Route path={"/sign-in"} element={<SignIn  />} />
            <Route path={"/forgot-password"} element={<ForgotPassword />} />
            <Route path={"/error"} element={<ErrorPage />} />
        <Route path={"*"} element={<NonePage />} />

      </Routes>

<User />
      <Footer />
    </div>
  );
}

export default App;
