import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from "redux-saga";

type State = {};

const initialState: State = {
};

export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);
	sagaMiddleware.run(rootSaga);
	return store;
}
