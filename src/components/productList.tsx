import styled from "styled-components";
import { productType } from "../ts/interfaces";
import Product from "./product";

const ProductListBlock = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

interface productListProps {
  list?: productType[];
}

const ProductList: React.FC<productListProps> = ({ list }) => {
  const res = list?.map(({id,title,img,price}) => {
    return <Product key={id} price={price} title={title} id = {id} img = {img}/>;
  });
  return <ProductListBlock className="product-list">{res}</ProductListBlock>;
};

export default ProductList;
