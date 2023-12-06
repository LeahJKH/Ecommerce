import "./LogginnComp.css";
import { useEffect, useState } from "react";

export function LogginnComp() {
  return (
    <>
      <div className="Comp" id="Comp">
        <div className="Comp-header">
          <img className="Comp-logo" src="/dd.png" alt="" />
          <button className="Comp-close-btn" id="Comp-close-btn" onClick={closeComp}>
            X
          </button>
        </div>
        <div className="Comp-inner" id="Comp-inner">
          <p className="Comp-text" id="Comp-text">
            Sign Up and Enjoy Personalized Experiences
          </p>
          <form className="Comp-form" action="">
            <label htmlFor="userName" className="Comp-label">
              Fullname:
            </label>
            <input
              type="text"
              name="userName"
              placeholder="Enter your fullname"
              className="Comp-userName Comp-input"
            />
            <label htmlFor="userEmail" className="Comp-label">
              Email:
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="Enter your email"
              className="Comp-userEmail Comp-input"
            />
            <label htmlFor="userPassword" className="Comp-label">
              Password:
            </label>
            <input
              type="password"
              name="userPassword"
              placeholder="********"
              className="Comp-userPassword Comp-input"
            />
            <button type="submit" className="Comp-button-signUp Comp-button">
              sign Up
            </button>
            <button className="Comp-button-guest Comp-button">Continue as Guest</button>
          </form>
          <p className="Comp-signIn">
            Already have an account?{" "}
            <a href="#" className="Comp-signInLink">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

const closeComp = () => {
  return (Comp.style.display = "none");
};
