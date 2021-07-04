import React, { useState } from "react";
import axios from "axios";

import "./LoginSignup.css";
import eye from "../../static/accounts/icon/eye.svg";
import eyeslash from "../../static/accounts/icon/eye-slash.svg";
import googleIcon from "../../static/accounts/icon/google.png";

const LoginSignup = (props) => {
  const switchToSignupView = () => {
    document.getElementById("container").classList.add("right-panel-active");
  };

  const switchToSigninView = () => {
    document.getElementById("container").classList.remove("right-panel-active");
  };

  const toggleShowPassword = () => {
    const togglePasswordIcon = document.querySelector("#togglePasswordIcon");
    const loginPasswordInput = document.querySelector("#loginPassword");

    const inputType = loginPasswordInput.getAttribute("type");

    if (inputType === "password") {
      loginPasswordInput.setAttribute("type", "text");
      togglePasswordIcon.src = eye;
      // togglePasswordIcon.setAttribute("title", "Hide Password")
      togglePasswordIcon.title = "Hide Password";
    } else {
      loginPasswordInput.setAttribute("type", "password");
      togglePasswordIcon.src = eyeslash;
      // togglePasswordIcon.setAttribute("title", "Hide Password")
      togglePasswordIcon.title = "Show Password";
    }
  };
  const [error, setError] = useState({ loginError: "", signupError: "" });
  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const signupInputChangeHandler = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  const loginInputChangeHandler = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/accounts/register/",
        signupState
      );
      console.log(response.data);
      console.log(props.history);
      if (response.data.response === "Error") {
        setError({ ...error, signupError: response.data.error_message });
      } else {
        props.history.push("signup/success");
      }
    } catch (error) {
      console.log(error.response);
      setError({ ...error, signupError: error.response.data.error_message });
    }
  };

  return (
    <>
      <div
        id="container"
        className={`container ${error.signupError ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form onSubmit={formSubmitHandler}>
            <h1>Create Account</h1>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupState.email}
              onChange={signupInputChangeHandler}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupState.password}
              onChange={signupInputChangeHandler}
              required
            />
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={signupState.password2}
              onChange={signupInputChangeHandler}
              required
            />
            <span className="form-error"> {error.signupError} </span>
            <br />
            <button type="submit" name="submit" value="sign_up">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form method="post">
            <h1>Sign in</h1>
            <a
              className="btn-google"
              href="{% url 'social:begin' 'google-oauth2' %}
                {% if 'next' in request.GET %}
                    ?next={{ request.GET.next }}
                {% endif %}"
              role="button"
              style={{ textTransform: null }}
            >
              <img
                width="23px"
                style={{ marginBottom: "3px", marginRight: "8px" }}
                alt="Google"
                src={googleIcon}
              />
              Login with Google
            </a>
            <p style={{ margin: "5px 0" }}>---OR---</p>
            <span className="form-error"> </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginState.email}
              onChange={loginInputChangeHandler}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
            />

            {/* <!-- Div to hold the elements in single line --> */}
            <div id="password_div">
              <input
                type="password"
                name="password"
                id="loginPassword"
                placeholder="Password"
                value={loginState.password}
                onChange={loginInputChangeHandler}
                required
              />

              {/* <!-- Eye icon to toggle --> */}
              <img
                data-toggle="tooltip"
                title="Show Password"
                id="togglePasswordIcon"
                src={eyeslash}
                alt=""
                onClick={toggleShowPassword}
              />
            </div>

            <a href="{% url 'accounts:password_reset' %}">
              Forgot your password?
            </a>
            <button type="submit" name="submit" value="login">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={switchToSigninView}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={switchToSignupView}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
