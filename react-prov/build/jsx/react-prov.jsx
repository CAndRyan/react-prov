import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout.jsx";
import MapTable from "./pages/MapTable.jsx";

const reactApp = document.getElementById('reactApp');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MapTable}></IndexRoute>
       {/*<Route path="datatable" component={Table}></Route>*/}
    </Route>
  </Router>,
reactApp);
