import { connect } from "react-redux";
import styled from "styled-components";
import ProductList from "./productList";
import { productType, stateTypes } from "../ts/interfaces";
import { burgersLoaded } from "../redux/actions";
import { useEffect } from "react";

const BurgersBlock = styled.div`
  height: 460px;
  background-color: #fff;
  h1 {
    margin: 0;
    padding-top: 30px;
  }
`;

interface burgersProps {
  burgers: productType[];
  burgersLoaded: Function;
}

const Burgers: React.FC<burgersProps> = ({ burgers, burgersLoaded }) => {
  useEffect(() => {
    burgersLoaded([
      {
        title: "breakfast",
        id: 1,
        price: 123,
        img:'burger1'
      },
      {
        title: "brunch",
        id: 2,
        price: 122,
        img:'burger2'
      },
      {
        title: "lunch",
        id: 3,
        price: 123,
        img:'burger3'
      },
      {
        title: "dinner",
        id: 4,
        price: 122,
        img:'burger4'
      },
      {
        title: "supper",
        id: 5,
        price: 123,
        img:'burger5'
      },
      {
        title: "night snack",
        id: 6,
        price: 122,
        img:'burger6'
      },
    ]);
  }, []);

  return (
    <BurgersBlock className="burgers">
      <h1>Choose burgers</h1>
      <ProductList list={burgers} />
    </BurgersBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    burgers: state.burgers,
  };
};

const mapDispatchToProps = {
  burgersLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(Burgers);
