import React from "react";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import { connect } from "react-redux";
import mapActionToProps from "../../actions/mapActionToProps";
import mapStateToProps from "../../reducers/mapStateToProps";
import { BrowserRouter } from "react-router-dom";
import PostSection from "../pages/HomePage/sections/PostSection";
import { Switch, Route, IndexRoute } from "react-router-dom";
import NavBar from "../pages/HomePage/NavBar";

class Routing extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AuthPage} />
            <Route path="/home" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(mapStateToProps.global, mapActionToProps)(Routing);
