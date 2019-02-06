import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { log } from "util";

class Details extends Component {
  state = {};
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            title,
            inCart,
            info
          } = value.detailProduct;
          return (
            // padding-top=button
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* title end */}
              {/* product info */}
              <div className="row">
                {/* my-3 margin top button 3 */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  {/* className="img-fluid" obrazek nie wyjdzie poza diva */}
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>model: {title}</h3>
                  <h4
                    className="text-title text-uppercase
                  text-muted mt-3 mb-2"
                  >
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    som info about product:{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/" className="float-left">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      className="btn  float-right"
                      disabled={inCart}
                    >
                      {inCart ? "in Cart" : "Add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
              {/* product info end */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
