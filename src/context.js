import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// Provide
// Consument

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProdact: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

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
    // console.log(product);
    this.setState({
      detailProduct: product
    });
  };
  addToCart = id => {
    // console.log("addToCart: " + id);
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.proce;
    product.total = price;
    this.setState(
      {
        products: tempProducts,
        cart: [...this.state.cart, product]
      },
      console.log(this.state)
    );
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

  openModal = id => {
    const prodact = this.getItem(id);
    this.setState({
      modalProdact: prodact,
      modalOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };

  increment = id => {
    console.log("increment");
  };
  decrement = id => {
    console.log("decrement");
  };
  removeItem = id => {
    console.log("removeItem");
  };
  clearCart = id => {
    console.log("clearCart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {/* test Button */}
        {/* <button onClick={this.getItem}>me</button> */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
