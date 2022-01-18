import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { changePage } from "../redux/actions";
import { stateTypes } from "../ts/interfaces";

const FooterBlock = styled.div`
  margin: 0;
  font-size: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  .start {
    background-color: #fff;
    padding: 5px;
    background-color: #74f874;
    cursor: pointer;
    display: none;
  }
  .cancel {
    display: none;
    padding: 5px;
    background-color: #ff9e81;
    cursor: pointer;
  }
  .active-btn {
    display: initial;
  }

  .hide {
    /* display: none; */
    /* opacity: 0; */
    visibility: hidden;
  }

  i {
    cursor: pointer;
    margin: auto 10px;
  }
`;

interface footerProps {
  page: string;
  changePage: Function;
}

const Footer: React.FC<footerProps> = ({ page, changePage }) => {
  const arrows = document.querySelector(".arrows");
  const left = document.querySelector(".fa-arrow-circle-left");
  const right = document.querySelector(".fa-arrow-circle-right");

  const nextPage = (next: boolean) => {
    if ((page === "welcome" && next) || (page === "sauses" && !next)) {
      changePage("burgers");
    } else if ((page === "burgers" && next) || (page === "drinks" && !next)) {
      changePage("sauses");
    } else if ((page === "sauses" && next) || (page === "cart" && !next)) {
      changePage("drinks");
    } else if (page === "drinks" && next) {
      changePage("cart");
    } else if (page === "burgers" && !next) {
      changePage("welcome");
    }
  };

  useEffect(() => {
    page !== "welcome"
      ? arrows?.classList.remove("hide")
      : arrows?.classList.add("hide");

    page === "burgers"
      ? left?.classList.add("hide")
      : left?.classList.remove("hide");
    page === "cart"
      ? right?.classList.add("hide")
      : right?.classList.remove("hide");
  });

  const handleCheck = ()=>{
    console.log('check');
  }

  const handleStartClick = () => {
    page === "welcome" ? changePage("burgers") :  changePage("welcome");
    // page === "welcome" ? changePage("burgers") : page === "cart" ? handleCheck(): changePage("welcome");

  };

  return (
    <FooterBlock className="footer">
      <div className="start active-btn" onClick={handleStartClick}>
        {page === "welcome"
          ? "start"
          : page === "cart"
          ? "checkout"
          : "cancel"}
      </div>

      <div className="arrows hide">
        <i
          onClick={() => nextPage(false)}
          className="fas fa-arrow-circle-left"
        ></i>
        <i
          onClick={() => nextPage(true)}
          className="fas fa-arrow-circle-right"
        ></i>
      </div>
    </FooterBlock>
  );
};

const mapDispatchToProps = {
  changePage,
};

const mapStateToProps = (state: stateTypes) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
