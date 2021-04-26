import React from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import "./NotAnAdmin.css";
function App() {
  return (
    <Container className="councilStyle" style={{ textAlign: "center" }}>
      <ContentWithPaddingXl>
        <div>
          <div className="noise"></div>
          <div className="overlay"></div>
          <div className="terminal">
            <h1>
              Admin <span className="errorcode"> Error!</span>
            </h1>
            <p className="output">
              I stole your site but you have Busted Me!!!
            </p>
            <p className="output">
              Please try to <a href="#1">go back</a> or{" "}
              <a href="#2">return to the homepage</a>.
            </p>
            <p className="output1">But You Shall Not Pass...</p>
            <p className="output">GoodLuck.....</p>
          </div>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
}

export default App;
