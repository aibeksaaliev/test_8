import React from 'react';
import Container from "react-bootstrap/Container";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const NewQuote = () => {
  return (
    <Container className="text-center pt-3">
      <h5 className="mb-3">New Quote</h5>
      <QuoteForm/>
    </Container>
  );
};

export default NewQuote;