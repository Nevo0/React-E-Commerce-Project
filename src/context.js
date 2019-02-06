import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// Provide
// Consument

class ProductProvider extends Component {
  state = { products: [], detailProduct: detailProduct };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      // console.log(singleItem);
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState({
      products: tempProducts
    });
  };

  handleDetail = () => {
    console.log("handleDetail");
  };
  addToCart = () => {
    console.log("addToCart");
  };

  test = () => {
    console.log(this.state.products[0].inCart);
    console.log(storeProducts[0].inCart);
    const tempProducts = [...this.state.products];
    tempProducts[0].inCart = true;
    this.setState(
      () => {
        return { products: tempProducts };
      },
      () => {
        console.log(this.state.products[0].inCart);
        console.log(storeProducts[0].inCart);
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {/* test Button */}
        {/* <button onClick={this.test}>me</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
