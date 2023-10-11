
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/products" component={ProductList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
