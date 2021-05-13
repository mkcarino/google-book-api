import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

import Nav from "../components/Nav";
import Books from "../components/Books";
import PageCounter from "../components/PageCounter";

const Result = () => {
  const { text } = useParams();
  const { pageNumber } = useParams();
  const [books, setBooks] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [errorQuery, setErrorQuery] = useState(false);

  useEffect(() => {
    const query = `https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=${pageNumber}`;
    console.log(query);
    Axios.get(query)
      .then((response) => {
        console.error(response);
        if (response.data.totalItems === 0) {
          setNotFound(true);
        } else {
          setBooks(response.data.items);
          setNotFound(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setErrorQuery(true);
      });
  }, [text, pageNumber]);

  if (notFound) {
    //If the search is empty
    return (
      <>
        <Nav />
        <StyledResult>
          <Subtitle>
            You searched: {text} and there's no book available
          </Subtitle>
        </StyledResult>
      </>
    );
  }

  if (errorQuery) {
    //Error request
    return (
      <>
        <Nav />
        <StyledResult>
          <Subtitle>There was an error in your request </Subtitle>
        </StyledResult>
      </>
    );
  }
  //Succesful request
  return (
    <>
      <Nav />
      <StyledResult>
        <Subtitle>You searched: {text}</Subtitle>
        <Books books={books} text={text} />
        <PageCounter pageNumber={pageNumber} text={text} />
      </StyledResult>
    </>
  );
};

/* Start Styling */
const StyledResult = styled.div`
  max-width: 100%;
  margin: 30px auto;
  min-height: 300px;
  padding: 0 2rem;
  border-radius: 5px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Subtitle = styled.h3`
  text-align: center;
  margin: 0.5rem 0;
`;
/* End Styling */

export default Result;
