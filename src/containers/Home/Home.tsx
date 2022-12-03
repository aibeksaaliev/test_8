import React, {useCallback, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {QuotesType, QuoteType} from "../../types";
import axiosApi from "../../axiosApi";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";
import {useLocation, useParams} from "react-router-dom";

const Home = () => {
  const {category} = useParams();
  const location = useLocation();
  const [quotes, setQuotes] = useState<QuoteType []>([]);
  const [homeLoading, setHomeLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setHomeLoading(true);
    try {
      if (location.pathname !== "/quotes" && "/") {
        const quotesResponse = await axiosApi<QuotesType>(`/quotes.json?orderBy="category"&equalTo="${category}"`);
        const quotesArray = Object.keys(quotesResponse.data).map(key => {
          const quote = quotesResponse.data[key];
          quote.id = key;
          return quote;
        });
        setQuotes(quotesArray);
      } else {
        const quotesResponse = await axiosApi.get<QuotesType>("/quotes.json");
        const quotesArray = Object.keys(quotesResponse.data).map(key => {
          const quote = quotesResponse.data[key];
          quote.id = key;
          return quote;
        });
        setQuotes(quotesArray);
      }
    } finally {
      setHomeLoading(false);
    }
  }, [location]);

  const deleteQuote = async (id: string) => {
    setHomeLoading(true);
    try {
      await axiosApi.delete("/quotes/" + id + ".json");
      setQuotes([]);
      fetchQuotes().catch(console.error);
    } catch (e) {
      throw new Error();
    } finally {
      setHomeLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes().catch(console.error);
  }, [fetchQuotes]);

  let content = (
    <div className="w-75">
      {quotes.map(quote => {
        return <QuoteCard key={quote.id} quote={quote} onClickHandler={() => deleteQuote(quote.id)}/>
      })}
    </div>
  );

  if (homeLoading) {
    content = <LoadSpinner/>
  }

  if (location.pathname === "/") {
    content = (
      <div className="w-75 text-center pt-5">
        <h2>Welcome, dear quest!</h2>
        <span>Please, choose category.</span>
      </div>
    )
  }

  return (
    <Container className="d-flex pt-4 justify-content-between">
      <CategoriesMenu/>
      {content}
    </Container>
  );
};

export default Home;