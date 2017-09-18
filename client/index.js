import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

Meteor.startup(() => {
  console.log(root);
  ReactDOM.render(<div>Hello, React!</div>, document.getElementById("root"));
});
