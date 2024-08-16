import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

function Navbar({setShowLogin}) {
  const [state, setState] = useState("home");
  return (
    <div className="navbar flex justify-around items-center p-4 font-outfit text-zinc-500 font-medium">
   <Link to={"/"}><img className="cursor-pointer" src={assets.logo} alt="logo" /></Link>   
      <ul className="flex gap-4 items-center">
        <Link to={"/"}
          onClick={() => setState("home")}
          className={`${
            state === "home"
              ? "border-b-2 border-zinc-500 cursor-pointer"
              : " cursor-pointer"
          }`}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setState("menu")}
          className={`${
            state === "menu"
              ? "border-b-2 border-zinc-500 cursor-pointer"
              : " cursor-pointer"
          }`}
        >
          Menu
        </a >

        <a href="#app_download"
          onClick={() => setState("Mobile-App")}
          className={`${
            state === "Mobile-App"
              ? "border-b-2 border-zinc-500 cursor-pointer"
              : " cursor-pointer"
          }`}
        >
          Mobile-App
        </a>
        <a href="#footer"
          onClick={() => setState("Contact Us")}
          className={`${
            state === "Contact Us"
              ? "border-b-2 border-zinc-500 cursor-pointer"
              : " cursor-pointer"
          }`}
        >
          Contact Us
        </a>
      </ul>
      <div className="flex gap-7">
        <img src={assets.search_icon} alt="search" />
       <Link to={"/cart"}>  <img src={assets.basket_icon} alt="basket" /> </Link>
        <button onClick={()=>setShowLogin(true)} className="border-2 border-zinc-500 px-3 rounded-xl">signIn</button>
      </div>
    </div>
  );
}

export default Navbar;
