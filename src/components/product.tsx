import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { adjustqty } from "../redux/actions";
import { actions, productType, stateTypes } from "../ts/interfaces";


const ProductBlock = styled.div`
  cursor: pointer;
  height: 150px;
  border: 1px solid black;
  flex: 1 1 30%;

  span {
    background-color: yellow;
    padding: 0 5px;
  }
  img {
    object-fit: contain;
    width: 100%;
    height: 120px;
  }

  &:active {
    background-color: #fff;
    opacity: .5;
    border: 2px solid black;
  }

  :hover {
    border: 2px solid black;

  }
`;


interface productProps extends productType {
  adjustqty:Function;
  page:string
}


const Product: React.FC<productProps> = ({ id, title, price, img, adjustqty,page }) => {
  const path = process.env.PUBLIC_URL + `/img/${img}.jpg`;

  const handleClick=(e:React.MouseEvent)=>{
    adjustqty(id,1,page);
  }

  return (
    <ProductBlock className="product" onClick={handleClick}>
        <img src={path} alt="" />
        <div>
        {title} <span>{price} $</span>
        </div>
    </ProductBlock>
  );
};


const mapStateToProps = (state:stateTypes)=>{
  return {
    page:state.page
  }
}

const mapDispatchToProps= {
  adjustqty
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
