import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

const PopUp = () => {
  const [signUp, setSignUp] = useState(false);
  const handleLogIn = () => setSignUp(false);
  const handleSignIn = () => setSignUp(true);
  return (
    <>
      {signUp ? <SignUp /> : <Login />}
      {signUp ? (
        <div className="w100 text-center mt-2">
          Already have an account? <Change onClick={handleLogIn}>Login</Change>
        </div>
      ) : (
        <div className="w100 text-center mt-2">
          Need to create an account?{" "}
          <Change onClick={handleSignIn}>Sign In</Change>
        </div>
      )}
    </>
  );
};

const Change = styled.a`
  color: blue;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export default PopUp;
