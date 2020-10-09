import React, { useState } from "react";
import { getRandomInt } from "../utils/index";

function SharedButtons(props) {
  const [commentsCount, setCommentsCount] = useState(getRandomInt(1, 10));
  const [retweetCount, setRetweetCount] = useState(getRandomInt(1, 50));
  const [likesCount, setLikesCount] = useState(getRandomInt(1, 100));

  const [likeClicked, setLikeClicked] = useState(false);

  const handleLikeClick = () => {
    setLikesCount((prev) => prev + 1);
    setLikeClicked(true);
  };

  return (
    <div className="sharedButtons">
      <span className="sharedButton">
        <i className="fas fa-comment"></i>
        {commentsCount}
      </span>
      <span className="sharedButton">
        <i className="fas fa-retweet"></i>
        {retweetCount}
      </span>
      <span className="sharedButton">
        {!likeClicked ? (
          <i onClick={handleLikeClick} className="far fa-heart"></i>
        ) : (
          <i className="fas fa-heart"></i>
        )}
        {likesCount}
      </span>
      <span className="sharedButton">
        <i className="fas fa-share"></i>
      </span>
    </div>
  );
}

export default SharedButtons;
