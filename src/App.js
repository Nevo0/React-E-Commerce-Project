import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {/* musimy dodac exact zeby aplikacja dzialala poprawnie*/}
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          {/* jezeli nie ma takiego linku zostanie wyswietlone to co jest w Default component */}
          <Route component={Default} />
        </Switch>
        <Modal />
        {/* <ProductList />
        <Details />
        <Cart />
        <Default /> */}
      </React.Fragment>
    );
  }
}

export default App;
