import { connect } from "react-redux";
import { cartUnit } from "../ts/interfaces";
import styled from "styled-components";
import { adjustqty } from "../redux/actions";

const CartItemBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  input {
      cursor: pointer;
      width: 30px;
      height: 30px;
      background-color: #eee;
      border: none;
      :hover {
          background-color: #888888;
      }
  }
  img {
    width: 50px;
    object-fit: contain;
  }
  i{
      cursor: pointer;
      :hover {
          color: red;
      }
  }
`;

interface CartItemProps extends cartUnit {
    adjustqty:Function;
}
const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  img,
  page,
  qty,
  adjustqty
}) => {
  const path = process.env.PUBLIC_URL + `/img/${img}.jpg`;
  const totalSum = qty * price;

  return (
    <CartItemBlock className="cart-unit">
      <img src={path} alt="" />
      <div className="cart-title"> {title}</div>
      {price} $
      <input type="button" value="-" onClick={() => adjustqty(id, -1, page)} />
      {qty}
      <input type="button" value="+" onClick={() => adjustqty(id, 1, page)} />
      {totalSum} $
      <i className="fas fa-trash" onClick={()=>adjustqty(id, -qty, page)}></i>
    </CartItemBlock>
  );
};

const mapDispatchToProps = {
  adjustqty,
};

export default connect(null, mapDispatchToProps)(CartItem);
