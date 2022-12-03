import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {QuoteType} from "../../types";
import {Link} from "react-router-dom";
import ReactTooltip from "react-tooltip";

interface QuoteCardProps {
  quote: QuoteType;
  onClickHandler: React.MouseEventHandler;
}

const QuoteCard: React.FC<QuoteCardProps> = ({quote, onClickHandler}) => {

  return (
    <Card className="mb-2">
      <Card.Header className="d-flex justify-content-between bg-dark align-items-center">
        <Card.Title className="text-white m-0">{quote.author}</Card.Title>
        <div>
          <Link
            to={"/quotes/" + quote.id + "/edit"}
            className="btn btn-dark rounded-circle border-white"
            style={{padding: "6px 10px"}}
            data-tip data-for="edit"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <ReactTooltip
            id="edit"
            place="left"
            effect="solid"
            type="light"
          >
            Edit quote
          </ReactTooltip>
          <Button
            variant="dark"
            className="rounded-circle ms-3 border-white"
            style={{padding: "6px 10px"}}
            onClick={onClickHandler}
            data-tip data-for="delete"
          >
            <i className="bi bi-trash3"></i>
          </Button>
          <ReactTooltip
            id="delete"
            place="left"
            effect="solid"
            type="light"
          >
            Delete quote
          </ReactTooltip>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text><q>{quote.quote}</q></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;