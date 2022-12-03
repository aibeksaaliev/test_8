import React, {useCallback, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import {QuoteType} from "../../types";
import axiosApi from "../../axiosApi";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

interface QuoteFormProps {
  id?: string;
}

const QuoteForm: React.FC<QuoteFormProps> = ({id}) => {
  const [quoteDetails, setQuoteDetails] = useState<QuoteType>({
    category: "",
    author: "",
    quote: "",
    id: ""
  });
  const [formLoading, setFormLoading] = useState(false);

  const fetchSelectedQuote = useCallback(async () => {
    setFormLoading(true);
    try {
      const quoteResponse = await axiosApi.get<QuoteType>("/quotes/" + id + ".json");
      await console.log(quoteResponse.data);
      setQuoteDetails(prevState => ({
        ...prevState,
        category: quoteResponse.data.category,
        author: quoteResponse.data.author,
        quote: quoteResponse.data.quote
      }));
    } finally {
      setFormLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetchSelectedQuote().catch(console.error);
    }
  }, [id, fetchSelectedQuote]);

  const onFormDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setQuoteDetails(prevState => ({
      ...prevState,
    [name]: value
    }));
  };

  const onFormDataSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      if (id) {
        await axiosApi.put("/quotes/" + id + ".json", quoteDetails);
      } else {
        await axiosApi.post("/quotes.json", quoteDetails);
      }
    } catch (e) {
      throw new Error();
    } finally {
      setFormLoading(false);
      setQuoteDetails({
        category: "",
        author: "",
        quote: "",
        id: ""
      });
    }
  };

  let content = (
    <Form className="w-75 mx-auto" onSubmit={onFormDataSubmit}>
      <Form.Label>Choose a category</Form.Label>
      <Form.Select
        name="category"
        value={quoteDetails.category}
        onChange={onFormDataChange}
      >
        <option value="star-wars">Star wars</option>
        <option value="famous-people">Famous people</option>
        <option value="saying">Saying</option>
        <option value="humour">Humour</option>
        <option value="motivational">Motivational</option>
      </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control
          name="author"
          value={quoteDetails.author}
          required
          type="text"
          placeholder="Your name"
          onChange={onFormDataChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Quote text</Form.Label>
        <Form.Control
          name="quote"
          value={quoteDetails.quote}
          required
          as="textarea"
          placeholder="Quote..."
          rows={5}
          onChange={onFormDataChange}/>
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );

  if (formLoading) {
    content = <LoadSpinner/>
  }

  return (
    <>
      {content}
    </>
  );
};

export default QuoteForm;