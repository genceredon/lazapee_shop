import React from "react";
import "./App.css";
import "./components/Header.css";
import logo from "./assets/images/logo.png";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Home from "./components/Home";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import ManageProduct from "./components/ManageProduct";

function App() {
  return (
    <div className="App">
      <Header> 
        <ul className="header">
        <img src={logo} alt="logo" className="app-logo" />
          <li>
            <NavLink exact to="/" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              ABOUT
            </NavLink>
          </li>
        </ul>
      </Header>
      <section className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={ProductList}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/manageProduct/:productId" component={ManageProduct} />
          <Route exact path="/404PageNotFound" component={PageNotFound}></Route>
          <Redirect from='*' to='/404PageNotFound' />
        </Switch>
      </section>
    </div>
  );
}

export default App;
