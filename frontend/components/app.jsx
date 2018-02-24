import React from "react";
import AccreditorForm from "./accreditor_form/AccreditorForm";
import Landing from "./landing/Landing";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/accreditor" component={AccreditorForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
