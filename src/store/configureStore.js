import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		rootReducer,
		/* preloadedState, */
		composeEnhancers(
			applyMiddleware(thunk)
	));

	if (module.hot) {
		module.hot.accept("../reducers", () => {
			store.replaceReducer(rootReducer)
		});
	}

	return store;
}

export default configureStore;