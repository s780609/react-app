import React from "react";
import ReactDOM from "react-dom";

// pass store to children component
import { Provider } from 'react-redux';

// using api hooks to connect redux-store
import store from "./app/store";

import App from "./App";

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root"));