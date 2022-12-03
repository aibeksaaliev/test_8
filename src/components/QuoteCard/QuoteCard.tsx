import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {QuoteType} from "../../types";
import {Link} from "react-router-dom";

interface QuoteCardProps {
  quote: QuoteType;
  onClickHandler: React.MouseEventHandler;
}

const QuoteCard: React.FC<QuoteCardProps> = ({quote, onClickHandler}) => {

  return (
    <Card className="mb-2">
      <Card.Header className="d-flex justify-content-between bg-dark">
        <Card.Title className="text-white">{quote.author}</Card.Title>
        <div>
          <Link
            to={"/quotes/" + quote.id + "/edit"}
            className="btn btn-dark rounded-circle border-white"
            style={{padding: "6px 10px"}}
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button
            variant="dark"
            className="rounded-circle ms-3 border-white"
            style={{padding: "6px 10px"}}
            onClick={onClickHandler}
          >
            <i className="bi bi-trash3"></i>
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{quote.quote}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;