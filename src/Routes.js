import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import FormDataComponent from './components/form-data.component';
import Login from "./components/Login";
//import Signup from "./components/Signup";

export default function Routes() {
	return (
    	<Switch>
      		<Route exact path="/">
        		<Home />
      		</Route>
      		<Route exact path="/login">
  				<Login />
			</Route>
			<Route exact path="/signup">
  				<FormDataComponent />
			</Route>
    	</Switch>
  	);
}