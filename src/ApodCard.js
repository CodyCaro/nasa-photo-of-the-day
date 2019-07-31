import React from "react";

function ApodCard(props) {
  // console.log(props.url);
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.url} alt={props.explanation} />
      <h3>{props.copyright}</h3>
      <h3>{props.date}</h3>
      <h3>{props.explanation}</h3>
    </div>
  );
}

export default ApodCard;
