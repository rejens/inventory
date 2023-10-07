export default function Reducer(state, action) {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };

    //purchase
    case "FETCH_ALL_PURCHASE":
      return {
        ...state,
        purchase: action.payload,
      };

    case "ADD_PURCHASE":
      return {
        ...state,
        purchase: [...state.purchase, action.payload],
      };

    //sales
    case "FETCH_ALL_SALES":
      return {
        ...state,
        sales: action.payload,
      };

    case "ADD_SALES":
      return {
        ...state,
        sales: [action.payload, ...state.sales],
      };

    case "CHANGE_DROPDOWN_STATE":
      return {
        ...state,
        showDropdown: action.payload,
      };

    case "SELL_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };

    //manage cart
    case "CHANGE_CART_STATE":
      return {
        ...state,
        hideRightSidebar: action.payload.hideRightSidebar,
      };

    case "MANAGE_CART":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
}
