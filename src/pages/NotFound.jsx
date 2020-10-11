import React from "react";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <div className="col-12 not-found">
      <h2>Sorry, that page doesn’t exist!</h2>
      <p><Link onClick={() => props.history.goBack()}> Why not try a search to find something else? </Link></p>
    </div>
  );
}

export default NotFound;
