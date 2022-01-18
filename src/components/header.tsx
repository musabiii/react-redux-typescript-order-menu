import React, { LegacyRef, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changePage } from "../redux/actions";
import { cartUnit, pages, stateTypes } from "../ts/interfaces";

const HeaderBlock = styled.div`
  margin: 0 auto;
  min-width: 200px;
  display: flex;
  align-items: flex-end;
  height: 60px;
  .link {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    height: 60px;
    line-height: 60px;
    background-color: #ff3b3b;
    flex: 1 1 100%;
    border: 1px #f7f7f7 solid;

    &.active {
      font-weight: 700;
      background-color: #fff;
    }
  }
`;

interface headerProps {
  page: string;
  cart: cartUnit[]
}

const Header: React.FC<headerProps> = ({ page,cart }) => {
  let qtyCart = 0;
  cart.forEach(el=>{
    return qtyCart+=el.qty
  })

  const cartTitle = cart.length===0?'cart':`cart (${qtyCart})`

  document
    .querySelectorAll(".link")
    .forEach((el) => el.classList.remove("active"));
  document.querySelector(`.link-${page}`)?.classList.add("active");

  return (
    <HeaderBlock className="header">
      <div className="link link-welcome active">welcome</div>
      <div className="link link-burgers">burgers</div>
      <div className="link link-sauses">sauses</div>
      <div className="link link-drinks">drinks</div>
      <div className="link link-cart">
        <i className="fas fa-shopping-cart"></i> {cartTitle}
      </div>
    </HeaderBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    page: state.page,
    cart:state.cart
  };
};

export default connect(mapStateToProps)(Header);
