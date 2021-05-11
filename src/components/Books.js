import React from "react";
import Book from "./Book";
import styled from "styled-components";

const Books = ({ books, text }) => {
  return (
    <StyledBooks>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book.id}
          img={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "bookCover"
          }
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          text={text}
        />
      ))}
    </StyledBooks>
  );
};

/* Start Styling */
const StyledBooks = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
  @media (max-width: 480px) {
    padding-top: 10px;
  }
`;
/* End Styling */
export default Books;
