import React from "react";
import AccreditorFormContainer from "./accreditor_form/AccreditorFormContainer";
import Landing from "./landing/Landing";
import Lawyer from "./lawyer/Lawyer";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/accreditor" component={AccreditorFormContainer} />
          <Route path="/lawyer" component={Lawyer} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
