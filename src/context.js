import React, { Component } from "react";

const ProductContext = React.createContext();
// Provide
// Consument

class ProductProvider extends Component {
  state = {};
  render() {
    return (
      <ProductContext.Provider value="hello from phone app">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
