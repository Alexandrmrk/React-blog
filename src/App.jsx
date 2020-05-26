import React from "react";
import "./styles/global.scss";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import initApp from "./initApp";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import Router from './components/Routing'

// const customMiddleware = (store) => (next) => (action) => {
//   console.log(
//     `Action type is ${action.type}, action data is ${action.payload}`
//   );
//   return next(action);
// };

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger)
);

class App extends React.Component {
  constructor(props) {
    super(props);
    initApp(store);
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
