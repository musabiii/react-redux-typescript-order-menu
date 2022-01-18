import { connect } from "react-redux";
import styled from "styled-components";
import { cartUnit, stateTypes } from "../ts/interfaces";
import CartItem from "./cartItem";

const CartBlock = styled.div`
  height: 460px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;


  .left, .right {
      flex: 1 1 50%;
  }

  .left {
    overflow-y: scroll;
  }

  .left::-webkit-scrollbar {
      display: none;
  }
`;

interface cartProps {
  cart: cartUnit[];
}

const Cart: React.FC<cartProps> = ({ cart }) => {

  let totalSum: number = 0;
  cart.forEach((el) => {
    totalSum += el.qty * el.price;
  });

  const res = cart.map((el,index) => {
    return (
      <CartItem key={index}
        id={el.id}
        title={el.title}
        qty={el.qty}
        price={el.price}
        page={el.page}
        img={el.img}
      />
    );
  });
  return (
    <CartBlock className="cart">
      <div className="left">{res}</div>
      <div className="right">
        <h3>summary</h3>
        {totalSum} $
      </div>
    </CartBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
