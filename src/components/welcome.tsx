import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../redux/actions";



const WelcomeBlock = styled.div`
  height: 460px;
  background-color: #fff;
  h1 {
      margin-top:0px;
      padding-top: 30px;
  }
`;

interface welcomeProps {
  clearCart:Function
}

const Welcome: React.FC<welcomeProps> = ({clearCart}) => {

  useEffect(()=>{
    clearCart();
  },[])

  return (
    <WelcomeBlock className="welcome">
      <h1>Welcome to our burger joint</h1>
    </WelcomeBlock>
  );
};

const mapDispatchToProps= {
  clearCart
}

export default connect(null,mapDispatchToProps)(Welcome);
