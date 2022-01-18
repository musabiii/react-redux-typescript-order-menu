import styled from "styled-components";
import ProductList from "./productList";
import { productType, stateTypes } from "../ts/interfaces";
import { connect } from "react-redux";
import { sausesLoaded } from "../redux/actions";
import { useEffect } from "react";


const SausesBlock = styled.div`
  height: 460px;
  background-color: #fff;
  h1 {
    margin-top: 0px;
    padding-top: 30px;
  }
`;

interface sausesProps {
  sauses:productType[];
  sausesLoaded:Function
}

const Sauses: React.FC<sausesProps> = ({sauses,sausesLoaded}) => {

  useEffect(()=>{
    sausesLoaded([
      {
        id:1,
        title:'sause',
        price:1250,
        img:'sause1'
      },      {
        id:2,
        title:'sause',
        price:1250,
        img:'sause2'
      },      {
        id:3,
        title:'sause',
        price:1250,
        img:'sause3'
      },      {
        id:4,
        title:'sause',
        price:1250,
        img:'sause4'
      },      {
        id:5,
        title:'sause',
        price:1250,
        img:'sause5'
      },      {
        id:6,
        title:'sause',
        price:1250,
        img:'sause6'
      },
    ])
  },[])
  

  return (
    <SausesBlock className="sauses">
      <h1>Sauses</h1>
      <ProductList list = {sauses}/>
    </SausesBlock>
  );
};

const mapStateToProps = (state: stateTypes) => {
  return {
    sauses: state.sauses,
  };
};

const mapDispatchToProps = {
  sausesLoaded
}

export default connect(mapStateToProps,mapDispatchToProps)(Sauses);
