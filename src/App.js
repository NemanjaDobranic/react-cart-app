import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Listing from "./modules/products/listing/Listing";
import Description from "./modules/product/description/Description";
import Checkout from "./modules/checkout/Checkout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/product/:id" component={Description} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
