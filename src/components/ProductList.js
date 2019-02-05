import React, { Component } from "react";
import Product from "./Product";
import Titel from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        {/* pading 5rem */}
        <div className="py-5">
          <div className="container">
            <Titel name="Our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return <h1>{value}</h1>;
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
        {/* <h3>Hello from ProductList</h3> */}
      </React.Fragment>
    );
  }
}

export default ProductList;
