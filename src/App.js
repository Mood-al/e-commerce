import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";
import "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
            <Route path="/details/:id" component={Details} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
