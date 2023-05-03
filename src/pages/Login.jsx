import React from "react";
import "./../css/form.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container mx-auto d-flex flex-column flex-lg-row">
        <div className="w-50 mx-auto">
          <h1 className="pacifico-font pb-3"> login</h1>
          <div className="form-text">
            We'll never share your email with anyone else. As because in
            Chefista, your security is our highest priority.
          </div>
        </div>
        <div className="form w-50 p-1 p-lg-4 mx-auto">
          <div className="rounded-2 shadow p-5 d-flex flex-column gap-3 flex-grow-1 bg_cream_orange_01">
            <h1 className="pb-4">LOGIN</h1>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
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
                className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-5 py-2"
              >
                Submit
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
