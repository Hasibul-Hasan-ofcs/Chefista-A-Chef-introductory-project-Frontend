import React, { useContext, useEffect, useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  // const [upProfile, setUpProfile] = useState(null);
  const [nameState, setNameState] = useState("");
  const [photoState, setPhotoState] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(form, name, email, password, photo);
    createUser(email, password)
      .then((userCredential) => {
        setNameState(name);
        setPhotoState(photo);
        console.log(userCredential);
      })
      .catch((err) => console.error(err));

    form.reset();
  };

  useEffect(() => {
    updateUser(nameState, photoState)
      .then((userCredential) => console.log(userCredential))
      .catch((err) => console.error(err));
  }, [nameState]);

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
              Please provide your credentials to get started with one of the
              largest chef community.
            </p>
            <form onSubmit={formSubmitHandler}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="floatingName"
                  placeholder="your name"
                  required
                />
                <label htmlFor="floatingName">Name</label>
              </div>
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
              <div className="form-floating mb-3">
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
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="photo"
                  className="form-control"
                  id="floatingPhoto"
                  placeholder="https://abcd.com/imageurl"
                />
                <label htmlFor="floatingPhoto">Photo URL</label>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  By accepting this I agree to the{" "}
                  <span className="fw-bold text-decoration-none theme-color">
                    Terms and Conditions
                  </span>
                </label>
              </div>

              <button
                type="submit"
                // className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
                className="theme-button rounded border-0 px-3 py-2 fw-bold w-100 my-3"
              >
                Sign Up
              </button>

              <div className="py-2">
                <p className="text-center">
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    className="fw-bold text-decoration-none theme-color"
                  >
                    Sign In
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

export default Signup;
