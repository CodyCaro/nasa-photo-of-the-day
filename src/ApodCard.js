import React, { useState } from "react";
import "./ApodCard.scss";

function ApodCard(props) {
  // console.log(props.url);
  const [wantingToReadMore, setWantingToReadMore] = useState(false);
  function handleReadMoreClick(e) {
    e.preventDefault();
    setWantingToReadMore(!wantingToReadMore);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>
        {props.copyright} ({props.date})
      </h3>
      <img src={props.url} alt={props.explanation} />
      <h3 className="date" />
      <button onClick={handleReadMoreClick}>Read More</button>
      <h3 className={wantingToReadMore ? "read-more" : "remove"}>
        {props.explanation}
      </h3>
    </div>
  );
}

export default ApodCard;
