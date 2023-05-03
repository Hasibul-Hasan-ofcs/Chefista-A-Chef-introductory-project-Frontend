import React, { useContext } from "react";
import "./../css/form.css";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { login, googlePopUpSignIn, githubPopUpSignIn } =
    useContext(AuthContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((err) => console.error(err));
  };

  const handleGooglePopUpLogin = () => {
    googlePopUpSignIn()
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  const handleGithubPopUpLogin = () => {
    githubPopUpSignIn()
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="container-fluid py-5">
      <div className="container mx-auto d-flex flex-column flex-lg-row gap-3 gap-lg-0">
        <div className="w-100 w-lg-50 mx-auto py-5">
          <p className="text-warning">
            <HiOutlineInformationCircle /> Please note.
          </p>
          <div className="form-text">
            We'll never share your email with anyone else. As because in
            Chefista, your security is our highest priority.
          </div>
        </div>
        <div className="form w-100 w-lg-50 p-1 p-lg-4 mx-auto">
          <div className="rounded-2 shadow p-5 d-flex flex-column gap-3 flex-grow-1 bg_cream_orange_01">
            {/* <h4 className="pb-4">LOGIN</h4> */}
            <h3 className="pb-3 text-center">Hey there!</h3>
            <p className="text-center">
              Welcome back. Please use your credentials to get started with
              chefista
            </p>
            <form onSubmit={formSubmitHandler}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div> */}

              <button
                type="submit"
                // className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
                className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
              >
                Sign In
              </button>

              <div className="py-2">
                <p className="text-center">
                  Don't have an account? &nbsp;
                  <Link
                    to="/signup"
                    className="fw-bold text-decoration-none theme-color"
                  >
                    Sign Up
                  </Link>
                </p>
                <p className="text-center">
                  Forgot password? &nbsp;
                  <Link
                    to="/signup"
                    className="fw-bold text-decoration-none theme-color"
                  >
                    Click Here
                  </Link>
                </p>
                <p className="text-center border-bottom py-3">
                  Also sign in using
                </p>
              </div>
            </form>
            <div className="d-flex gap-2 flex-column">
              <button
                type="submit"
                className="github_login_button rounded py-1 px-3 fw-medium w-100"
                onClick={handleGithubPopUpLogin}
              >
                <FaGithub></FaGithub> &nbsp; Github
              </button>
              <button
                type="submit"
                className="google_login_button rounded py-1 px-3 fw-medium w-100"
                onClick={handleGooglePopUpLogin}
              >
                <FaGoogle></FaGoogle> &nbsp; Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
