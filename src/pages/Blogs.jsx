import React from "react";
// import BannerCommon from "./../components/BannerCommon";

const Blogs = () => {
  return (
    <div className="">
      {/* <BannerCommon pageTitle="Blogs"></BannerCommon> */}
      <div className="container py-5 d-flex flex-column gap-3">
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">
              Tell us the differences between uncontrolled and controlled
              components.
            </p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;
          </p>
        </div>

        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">
              How to validate React props using PropTypes
            </p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;
          </p>
        </div>
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">
              Tell us the difference between nodejs and express js.
            </p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;
          </p>
        </div>
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">
              What is a custom hook, and why will you create a custom hook?
            </p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;In React JS custom hooks are special type of functions built
            for special purposes. The hook defining convention is to start the
            name of the hook with <b>use</b> just like useState or useRef. This
            hooks can perform hook specific static tasks for which it is defined
            for. Custom hooks are sharable between components that means custom
            hooks are reusable. With custom hook it's easier to keep the logic
            and task specific functionalities separate from other components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
