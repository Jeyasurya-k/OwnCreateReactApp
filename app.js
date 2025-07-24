import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => <h1 className="heading">This is jsx heading</h1>;

const HeadingComponent = () => (
  <div id="container">
    <JsxHeading />
    <h1 className="heading">This is the functional component heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
