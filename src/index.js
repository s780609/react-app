import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
//import store from "./app/store";

import Button from "./components/Button";
import { Counter } from "./features/counter/Counter";

import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

let element = <Button>Hello World</Button>

ReactDOM.render(
    <Provider store={store}>
        {element}
        {/* <Counter></Counter> */}
        <App></App>
    </Provider>,
    document.getElementById("root"));