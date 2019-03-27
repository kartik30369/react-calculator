import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FadeTransform } from "react-animation-components";

export default function Help(props) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(-50%)"
      }}
    >
      <div className="App">
        <div className="calculator">
          <div className="top-pane">
            <div className="backButton">
              <Link to="/main">
                <FontAwesomeIcon icon={faArrowLeft} color="var(--mainWhite)" />
              </Link>
            </div>
            <div className="title">Help</div>
          </div>
          <div className="helpSec" />
        </div>
      </div>
    </FadeTransform>
  );
}
