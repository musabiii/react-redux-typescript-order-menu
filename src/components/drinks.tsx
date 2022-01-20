import { connect } from "react-redux";
import styled from "styled-components";
import { productType, stateTypes } from "../ts/interfaces";
import ProductList from "./productList";
import { drinksLoaded } from "../redux/actions";
import { useEffect } from "react";


const DrinksBlock = styled.div`
  height: 460px;
  background-color: #fff;
  h1 {
      margin-top:0px;
      padding-top: 30px;
  }
`;


interface drinksProps {
  drinks:productType[];
  drinksLoaded:Function;
}

const Drinks: React.FC<drinksProps> = ({drinks,drinksLoaded}) => {

  useEffect(()=>{
    drinksLoaded([
      {
        id:1,
        title:'pepsi',
        price:42,
        img:'drink1'
      },      {
        id:2,
        title:'cola',
        price:42,
        img:'drink2'
      },      {
        id:3,
        title:'mirinda',
        price:42,
        img:'drink3'
      },      {
        id:4,
        title:'dr pepper',
        price:42,
        img:'drink4'
      },      {
        id:5,
        title:'schweppes',
        price:42,
        img:'drink5'
      },      {
        id:6,
        title:'fanta',
        price:42,
        img:'drink6'
      },
    ])
  },[])

  return (
    <DrinksBlock className="drinks">
      <h1>Drinks</h1>
      <ProductList list={drinks}/>
    </DrinksBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    drinks: state.drinks,
  };
};

const mapDispatchToProps = {
  drinksLoaded
}


export default connect(mapStateToProps,mapDispatchToProps)(Drinks);
