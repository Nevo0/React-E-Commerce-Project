import React, { Component } from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, company, info, inCar, count, total } = item;
  const { increment, decrement, removeItem, clearCart } = value;

  return (
    <div className="row text-capitalize text-center my-4 ">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="Product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price</span>
        {price}
      </div>
      {/* buttonstart */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* buttonend */}

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 ">
        <span>item total: $ {total}</span>
      </div>
    </div>
  );
};

export default CartItem;
