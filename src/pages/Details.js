import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import BookPage from "../components/BookPage";
import Nav from "../components/Nav";
import styled from "styled-components";

const Details = () => {
  const { book } = useParams();
  const [bookDetails, setBooks] = useState([]);
  console.log(book);
  useEffect(() => {
    Axios.get(`https://www.googleapis.com/books/v1/volumes/${book}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => console.error(err));
  }, [book]);
  console.log(bookDetails.id);
  if (!bookDetails.volumeInfo) {
    //Empty data
    return (
      <div className="container">
        <h3>No data to show</h3>
      </div>
    );
  } else {
    //Succesful request
    return (
      <StyledDetails>
        <Nav />
        <BookPage
          key={book}
          title={bookDetails.volumeInfo.title}
          img={
            bookDetails.volumeInfo.imageLinks
              ? bookDetails.volumeInfo.imageLinks.medium ||
                bookDetails.volumeInfo.imageLinks.thumbnail
              : "Image not aviable"
          }
          authors={
            bookDetails.volumeInfo.authors
              ? bookDetails.volumeInfo.authors
              : "Author not available"
          }
          desc={
            bookDetails.volumeInfo.description
              ? bookDetails.volumeInfo.description
              : "No Description available"
          }
          isbn={
            bookDetails.volumeInfo.industryIdentifiers
              ? bookDetails.volumeInfo.industryIdentifiers[0].identifier ||
                bookDetails.volumeInfo.industryIdentifiers[1].identifier
              : "No ISBN available"
          }
          pub={
            bookDetails.volumeInfo.publisher
              ? bookDetails.volumeInfo.publisher
              : "No publisher available"
          }
        />
      </StyledDetails>
    );
  }
};
/* Start Styling */
const StyledDetails = styled.div`
  max-width: 90%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
  border-radius: 5px;
`;
/* End Styling */

export default Details;
