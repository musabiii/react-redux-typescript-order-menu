import { actions, actionType } from "../ts/interfaces";
import { productType } from "../ts/interfaces";

export const burgersLoaded = (newList: productType[]) => {
  return {
    type: actions.LOAD_BURGERS,
    payload: newList,
  };
};

export const changePage = (page: string) => {
  return {
    type: actions.CHANGE_PAGE,
    payload: page,
  };
};

export const adjustqty = (id: number, qty: number,page:string):actionType => {
  return {
    type: actions.ADJUST_QTY,
    payload: {
      id: id,
      qty: qty,
      page:page 
    },
  };
};

export const clearCart = ()=>{
  return {
    type: actions.CLEAR_CART
  }
}

export const sausesLoaded = (newList:productType[]):actionType=>{
  return {
    type: actions.LOAD_SAUSES,
    payload: newList,
  };
}

export const drinksLoaded = (newList:productType[]):actionType=>{
  return {
    type: actions.LOAD_DRINKS,
    payload: newList,
  };
}