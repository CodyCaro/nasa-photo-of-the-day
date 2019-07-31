import React, { useState } from "react";
import "./Heart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

function Heart() {
  const [typeOfHeart, setTypeOfHeart] = useState(faHeartRegular);
  const [fillHeart, setFillHeart] = useState(false);

  function handleHeartClick(e) {
    console.log("clicked");
    e.preventDefault();
    setTypeOfHeart(faHeartSolid);
    setFillHeart(true);
  }
  return (
    <div className={fillHeart ? "heart-filled" : "heart"}>
      <FontAwesomeIcon icon={typeOfHeart} onClick={handleHeartClick} />
    </div>
  );
}

export default Heart;
