import React from "react";
import { withRouter } from "react-router-dom";

function Header(props) {
  const { headerName, additionalInfo, goBackArrow } = props;
  return (
    <header>
      {goBackArrow && (
        <i
          onClick={() => props.history.goBack()}
          className="fas fa-arrow-left"
        ></i>
      )}
      <h5>{headerName}</h5>
      {additionalInfo && <span className="addInfo">{additionalInfo}</span>}
    </header>
  );
}

export default withRouter(Header);
