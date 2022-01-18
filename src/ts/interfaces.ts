export {};

export enum actions {
  LOAD_BURGERS = "LOAD_BURGERS",
  LOAD_DRINKS = "LOAD_DRINKS",
  LOAD_SAUSES = 'LOAD_SAUSES',
  ADD_UNIT = "ADD_UNIT",
  CHANGE_PAGE = 'CHANGE_PAGE',
  ADJUST_QTY = 'ADJUST_QTY',
  CLEAR_CART = 'CLEAR_CART',
}

export interface actionType {
  type: string;
  payload: any;
}

//interface of single product unit
export interface productType {
  title: string;
  id: number;
  price: number;
  img:string
}

//extends product properties for cart
export interface cartUnit extends productType {
  qty: number;
  page: string;
}

export interface stateTypes {
  burgers: productType[];
  sauses: productType[];
  drinks: productType[];
  cart: cartUnit[];
  page:typeof pages.welcome;
}

export enum pages {
  welcome = 'welcome',
  burgers = 'burgers',
  sauses = 'sauses',
  drinks = 'drinks',
  cart = 'cart'
}
