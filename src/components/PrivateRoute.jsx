import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="d-flex py-5 justify-content-center">
        <Spinner animation="grow" />
      </div>
    );

  if (user) return children;

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
