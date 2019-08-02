import React, { useState } from "react";
import "./ApodCard.scss";
import { Button, Card, Image } from "semantic-ui-react";
import Heart from "./Heart.js";

function ApodCard(props) {
  // console.log(props.url);
  const [wantingToReadMore, setWantingToReadMore] = useState(false);
  function handleReadMoreClick(e) {
    e.preventDefault();
    setWantingToReadMore(!wantingToReadMore);
  }
  return (
    <Card>
      <Image src={props.url} wrapped ui={false} alt={props.title} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {props.copyright} ({props.date})
          </span>
        </Card.Meta>
        <Heart />
        <Button onClick={handleReadMoreClick}>Read More</Button>
        <Card.Description
          className={wantingToReadMore ? "read-more" : "remove"}
        >
          {props.explanation}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ApodCard;
