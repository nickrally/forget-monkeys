import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Temp from "./temp/Temp";
import Monkeys from "./forget/Monkeys";
import React from 'react';
const App = () => {
    return (
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/monkeys" component={Monkeys} />
        <Route path="/temp" component={Temp} />
        
      </Switch>
    );
  }
  
  export default App;