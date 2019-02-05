import React, { Component } from "react";
import Product from "./Product";
import Titel from "./Title";

import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        {/* pading 5rem */}
        <div className="py-5">
          <div className="container">
            <Titel name="Our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
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
