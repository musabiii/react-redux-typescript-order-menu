import {
  actionType,
  actions,
  stateTypes,
  pages,
  productType,
  cartUnit,
} from "../ts/interfaces";

const initialState: stateTypes = {
  burgers: [],
  sauses: [],
  drinks: [],
  cart: [],
  page: pages.welcome,
};

export const reducer = (
  state: stateTypes = initialState,
  action: actionType
): stateTypes => {
  switch (action.type) {
    case actions.LOAD_BURGERS:
      return { ...state, burgers: action.payload };
    case actions.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case actions.ADJUST_QTY:
      const page = action.payload.page as string;
      const stateList =
        page === "burgers"
          ? state.burgers
          : page === "sauses"
          ? state.sauses
          : page === "drinks"
          ? state.drinks
          : null;

      const item: productType | undefined = stateList?.find(
        (el) => el.id === action.payload.id
      );
      const indexCart: number = state.cart.findIndex(
        (el) => el.id === action.payload.id && el.page === action.payload.page
      );

      const itemCart: cartUnit | undefined = state.cart.find(
        (el) => el.id === action.payload.id && el.page === action.payload.page
      );

      //if absent in the cart
      if (indexCart === -1) {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...item, qty: 1, page: action.payload.page } as cartUnit,
          ],
        };
      }

      const before = state.cart.slice(0, indexCart);
      const after = state.cart.slice(indexCart + 1);

      //if remove item or qty become eq to zero
      const newQty = itemCart?.qty + action.payload.qty;
      if (newQty === 0) {
        return {
          ...state,
          cart: [...before, ...after],
        };
      }

      return {
        ...state,
        cart: [...before, { ...item, qty: newQty,page: action.payload.page } as cartUnit, ...after],
      };

      return { ...state };

    case actions.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case actions.LOAD_SAUSES:
      return {
        ...state,
        sauses: action.payload,
      };

    case actions.LOAD_DRINKS:
      return {
        ...state,
        drinks: action.payload,
      };
    default:
      return state;
  }
};
