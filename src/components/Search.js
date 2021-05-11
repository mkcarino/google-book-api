import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const inputTextHandler = (e) => {
    if (e.target.value !== " ") {
      setText(e.target.value);
      setToggle(true);
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <StyledSearch>
        <Input
          required
          type="text"
          value={text}
          onChange={inputTextHandler}
          placeholder="Search a Book, Author, Publisher"
        />
        <Link to={text !== "" ? `/search/${text}/0` : window.location}>
          <Button toggle={toggle} type="submit" value="Search Book">
            Search
          </Button>
        </Link>
      </StyledSearch>
    </Form>
  );
};

/* Start Styling */
const StyledSearch = styled.div`
  position: flex;
`;
const Input = styled.input`
  background: #fff;
  outline: 0;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  width: 100%;
  border: 0;
  height: 3rem;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  :not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 6rem);
  }
  @media (max-width: 480px) {
    :not(:placeholder-shown) {
      border-radius: 0.7rem 0 0 0.7rem;
      width: calc(100% - 4rem);
    }
    
  }
`;
const Form = styled.form`
  position: relative;
  width: 30rem;
  @media (max-width: 768px) {
    width:90%;
  }
`;
const Button = styled.button`
  color: white; /*  */
  outline: 0;
  position: absolute;
  display: ${({ toggle }) => (toggle ? "block" : "none")};
  width: 6rem;
  height: 3rem;
  border: 0;
  top: 0;
  right: 0;
  background: #57bd84;
  border-radius: 0 0.7rem 0.7rem 0;
  font-weight: bold;
  @media (max-width: 480px) {
    width: 4rem;
  }
`;
/* End Styling */
export default Search;
