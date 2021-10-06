import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reducer from "../reducer/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../components/saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhances = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({ books: reducer }),
    composeEnhances(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
