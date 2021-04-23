import "./App.css";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
function App() {
  return (
    <Container className="councilStyle" style={{ textAlign: "center" }}>
      <ContentWithPaddingXl>
        <div>
          <div class="noise"></div>
          <div class="overlay"></div>
          <div class="terminal">
            <h1>
              Admin <span class="errorcode"> Error!</span>
            </h1>
            <p class="output">I stole your site but you have Busted Me!!!</p>
            <p class="output">
              Please try to <a href="#1">go back</a> or{" "}
              <a href="#2">return to the homepage</a>.
            </p>
            <p class="output1">But You Shall Not Pass...</p>
            <p class="output">GoodLuck.....</p>
          </div>
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
}

export default App;
