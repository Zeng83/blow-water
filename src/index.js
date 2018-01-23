import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./container/app";

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const rootElement = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);