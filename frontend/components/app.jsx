import React from "react";
import AccreditorFormContainer from "./accreditor_form/AccreditorFormContainer";
import Landing from "./landing/Landing";
import LawyerContainer from "./lawyer/LawyerContainer";
import LawyerChooser from "./lawyer/LawyerChooser";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/accreditor" component={AccreditorFormContainer} />
          <Route path="/lawyers/:id" component={LawyerContainer} />
          <Route path="/lawyers" component={LawyerChooser} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
