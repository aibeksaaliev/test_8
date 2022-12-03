import React from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from "react-router-dom";
import QuoteForm from "../../components/QuoteForm/QuoteForm";

const EditQuote = () => {
  const {id} = useParams();

  return (
    <Container>
      <QuoteForm id={id}/>
    </Container>
  );
};

export default EditQuote;