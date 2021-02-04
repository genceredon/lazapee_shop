import React from "react";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found!</h1>
        <p>
          <NavLink to="/" className="pnf-link">Back to Home</NavLink>
        </p>
      <Route exact path="/">
            <Home />
      </Route>
    </div>);
};

export default PageNotFound;
