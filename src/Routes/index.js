import React from 'react';
import Fetchdata from '../Fetchdata/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Video from '../Video/index.js';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Fetchdata} />
        <Route  path="/:id" component={Video} />
      </Switch>
    </Router>
  );
};
export default Routes;
