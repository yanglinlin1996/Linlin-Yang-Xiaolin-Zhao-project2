/*
This code will be acting as the entryway into the code and will kickoff the React components.
"the import X from 'Y';" is how we'll pull functions/classes from libraries!  You'll be doing this a lot.
ReactDOM, and especially React, are libraries we'll need to import from to get React working.
App and App.jsx haven't been made yet (we'll get to that soon).  This will be our first component.
import './index.css' is how we'll import styling when necessary.  If we want to use a styling
library like Bootstrap or Material-UI, we'll want to install a library and then import it like
one of these libraries
ReactDOM.render isn't logic you need to spend too much time with, but it's basically saying that
it's going to be rendering the React component App (which we'll create in a second) on the root
element of the HTML document (this is actually using the DOM API to find this element!)
*/

import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(<Board />, document.getElementById("root"));
