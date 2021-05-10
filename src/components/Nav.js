import React, { useState } from "react";
import Search from "./Search";
import styled from "styled-components";
import googleLogo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import PopUp from "./PopUp";
import { useAuth } from "../contexts/AuthContext";

const Nav = () => {
  const { currentUser, logout } = useAuth();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => {
    setShow(false);
    console.log(show);
  };
  const handleShow = () => setShow(true);
  async function handleLogout() {
    try {
      await logout();
      history.push(window.location);
    } catch (error) {
      console.log(error);
    }
  }

  if (currentUser === null) {
    return (
      <StyledNav>
        <Link to="/">
          <Logo src={googleLogo} />
        </Link>
        <Search />
        <ShowButton>
          <Button onClick={handleShow} className="w-100">
            Login
          </Button>
        </ShowButton>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            <PopUp />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </StyledNav>
    );
  } else {
    return (
      <StyledNav>
        <Link to="/">
          <Logo src={googleLogo} />
        </Link>
        <Search />
        <ShowUser>
          {" "}
          Welcome back, {currentUser && currentUser.email}{" "}
          <Change onClick={handleLogout}>Logout</Change>
        </ShowUser>
      </StyledNav>
    );
  }
};

/* Start Styling */
const StyledNav = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    font-size: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 55px;
  margin-right: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
const ShowButton = styled.div`
  height: 85px;
  margin-left: auto;
  width: 80px;
  @media (max-width: 768px) {
    order: -1;
  }
`;
const ShowUser = styled.div`
  height: 85px;
  margin-left: auto;
  @media (max-width: 768px) {
    order: -1;
  }
`;
const Change = styled.a`
  color: blue;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;
/* End Styling */
export default Nav;
