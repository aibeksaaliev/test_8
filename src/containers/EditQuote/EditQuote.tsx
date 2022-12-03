import React from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const EditQuote = () => {
  const {id} = useParams();

  return (
    <Container className="text-center pt-3">
      <h5 className="mb-3">Edit Quote</h5>
      <QuoteForm id={id}/>
    </Container>
  );
};

export default EditQuote;