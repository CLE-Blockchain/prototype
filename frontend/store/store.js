import { createStore, applyMiddleware } from "redux";
// import logger from '../middleware/logger';
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const logger = require("../middleware/logger");
  middlewares.push(logger.default);
}

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
