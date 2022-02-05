import { Route, Switch } from "react-router-dom";
import Monkeys from "./home/Monkeys";
import PageNotFound from "./common/PageNotFound";
import React from 'react';
const App = () => {
    return (
        <Switch>
        <Route exact path="/" component={Monkeys} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
  
  export default App;