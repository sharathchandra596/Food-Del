import { useState } from "react";
import { assets } from "../assets/assets";

// eslint-disable-next-line react/prop-types
const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup font-outfit absolute z-10 w-full h-full bg-black bg-opacity-80 grid">
      <form className="loginpopup-contanor place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-6 p-6 rounded-lg text-sm" action="">
        <div className="login-popup-titel flex justify-between items-center text-black text-xl">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
            className="w-5 cursor-pointer"
          />
        </div>
        <div className="login-popup-input flex flex-col gap-4">
          {currState === "LogIn" ? (
            <></>
          ) : (
            <input type="text" placeholder="name" required className=" outline-none border p-2 rounded-lg"/>
          )}

          <input type="email" placeholder="email" required className="outline-none border p-2 rounded-lg"/>

          <input type="password" placeholder="password" required className="outline-none border p-2 rounded-lg"/>
        </div>
        <button className="border-none p-2 rounded-md text-white bg-red-500 text-lg cursor-pointer ">{currState === "Sign Up" ? "create Account" : "LogIn"}</button>
        <div className="login-pop-condtion flex items-start gap-2 mt-0">
          <input className="mt-1" type="checkbox" required name="" id="" />
          <p>i agree to privacy and polociy</p>
        </div>
        {currState == "LogIn" ? (
          <p>
            create a new account <span className="font-medium text-red-500 text-md cursor-pointer" onClick={()=>setCurrState("Sign Up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have a account <span className="font-medium text-red-500 text-md cursor-pointer" onClick={()=>setCurrState("LogIn")}>logIn here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
