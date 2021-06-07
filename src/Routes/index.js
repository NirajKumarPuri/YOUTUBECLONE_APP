import React from 'react';
import Fetchdata from '../Fetchdata/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Graph from "../Component/Graph/index";
import Video from '../Video/index.js';
const Routes = () => {
  return (
    <Router>
      <Switch>
      <Route path="/Graph" component={Graph}/>
        <Route exact path="/" component={Fetchdata} />
        <Route  path="/:id" component={Video} />
        <Route path="/Graph" component={Graph}/>
      </Switch>
    </Router>
  );
};
export default Routes;
