import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
  const questions = {
    first:
      "Tell us the differences between uncontrolled and controlled components.",
    second: "How to validate React props using PropTypes",
    third: "Tell us the difference between nodejs and express js.",
    fourth: "What is a custom hook, and why will you create a custom hook?",
  };

  const answers = {
    first:
      "In React how the components manage and update their states is a very crucial part. The terms Controlled and Uncontrolled basically indicates the components state maintaining process. Controlled components are such kind of components that have their state and behavior controlled by the parent component. So, these Controlled components depend on their parents for passing props and update according to that. On the other hand Uncontrolled components internally manages their own states. That's the basic difference.",
    second:
      "PropTypes are built-in library in react. So, we need to import the PropTypes from prop-types package to validate the props. It allows to specify the type and shape of the props that a component should expect. It is called on the component function itself. It specifies warning if the shape or required type is not met. It's one of react's useful type-checking tool.",
    third:
      "Node and Express JS are two very strong and well-known term for web applications. Node.js is a server-side runtime environment, while Express.js is a web application framework built on top of Node.js. It's very easy and time saving using Express JS as it includes required as well as efficient tools to build backend applications. In Express js tools and features for building web applications that includes routing, middleware, and templating engines. For being non blocking, event-driven, scalable Node JS is widely used all over the world. Also Express includes tools for building scalable web applications, such as load balancing and clustering",
    fourth:
      "In React JS custom hooks are special type of functions built for special purposes. The hook defining convention is to start the name of the hook with use just like useState or useRef. This hooks can perform hook specific static tasks for which it is defined for. Custom hooks are sharable between components that means custom hooks are reusable. With custom hook it's easier to keep the logic and task specific functionalities separate from other components. An that's why I'd like to use custom hook's to make the implementation process easier.",
  };

  return (
    <div className="">
      <h1 className="text-center py-5">Blogs</h1>
      <div className="container mx-auto d-flex align-items-center justify-content-center">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn theme-button" onClick={toPdf}>
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>

      <div className="container py-5 d-flex flex-column gap-3" ref={ref}>
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.first}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.first}
          </p>
        </div>

        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.second}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.second}
          </p>
        </div>
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.third}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.third}
          </p>
        </div>
        <div className="qnaCard rounded border p-3">
          <h3 className="d-flex align-items-center flex-wrap gap-3">
            <span className="theme-color fw-bolder">Question : </span>
            <p className="py-0 my-0">{questions.fourth}</p>
          </h3>
          <br />
          <p>
            <span className="theme-bg-purple text-white rounded px-2">
              Answer
            </span>
            &nbsp;{answers.fourth}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
