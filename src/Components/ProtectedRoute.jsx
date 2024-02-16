import React from "react";
import { auth } from "../config/firebase";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  const navigate = useNavigate();
  const { Component } = props;
  if (auth?.currentUser?.uid) return <div>{Component}</div>;
  else {
    alert("NOT LOGGED IN");
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
