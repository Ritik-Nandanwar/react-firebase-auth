import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../config/firebase";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container"
        style={{
          padding: "22px",
          marginTop: "25vh",
          maxWidth: "450px",
        }}
      >
        <div className="card center hoverable" style={{ padding: "22px" }}>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="button"
            className="btn hoverable center"
            value="Signup"
            onClick={async () => {
              console.log(email, password);
              try {
                await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                ).then(() => {
                  console.log(auth.currentUser);
                  navigate("/main");
                });
              } catch (err) {
                console.error(err);
              }
            }}
          />
          <input
            type="button"
            className="btn hoverable center"
            value="Login"
            style={{ marginLeft: "16px" }}
            onClick={async () => {
              console.log(email, password);
              try {
                await signInWithEmailAndPassword(auth, email, password).then(
                  () => {
                    console.log("LOGGED IN" + auth.currentUser.email);
                    navigate("/main");
                  }
                );
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
