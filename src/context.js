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

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    // const product2 = this.state.products[id];
    // console.log(product);
    // console.log(product2);
    return product;
  };

  handleDetail = id => {
    // console.log("handleDetail");
    const product = this.getItem(id);
    console.log(product);
    this.setState({
      detailProduct: product
    });
  };
  addToCart = id => {
    // console.log("addToCart: " + id);
    this.getItem(id);
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
        <button onClick={this.getItem}>me</button>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
