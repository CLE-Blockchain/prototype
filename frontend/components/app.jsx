import React from "react";
import AccreditorForm from "./accreditor_form/AccreditorForm";
import Landing from "./landing/Landing";
import Lawyer from "./lawyer/Lawyer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/accreditor" component={AccreditorForm} />
          <Route path="/lawyer" component={Lawyer} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
