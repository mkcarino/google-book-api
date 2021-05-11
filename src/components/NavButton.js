import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PopUp from "./PopUp";
import { useAuth } from "../contexts/AuthContext";

function NavButton() {
  const { currentUser, logout } = useAuth();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => {
    setShow(false);
    console.log(show);
  };
  const handleShow = ({ home }) => setShow(true);
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
      <>
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
      </>
    );
  } else {
    return (
      <ShowUser>
        {" "}
        Welcome back, {currentUser && currentUser.email}{" "}
        <Change onClick={handleLogout}>Logout</Change>
      </ShowUser>
    );
  }
}
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

export default NavButton;
