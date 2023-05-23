export const actionType = {
  SET_USER: "SET_USER",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FILTER_TERM: "SET_FILTER_TERM",
  SET_PRODUCT: "SET_PRODUCT",
  SET_FILTER: "SET_FILTER",
  SET_FILTER_BY_NEW_OLD: "SET_FILTER_BY_NEW_OLD",
  SET_ALL_USERS: "SET_ALL_USERS",
  SET_PRODUCT_INDEX:"SET_PRODUCT_INDEX",
  SET_ADD_CART:"SET_ADD_CART"
};

const reducer = (state, action) => {
  switch (action.type) {
        case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
        case actionType.SET_PRODUCT:
      return {
        ...state,
        products: action.products,
      };
      case action.SET_ALL_USERS:
        return{
          ...state,
          allUser:action.allUser
        };
        case action.SET_ADD_CART:
          return {
            cart:action.cart
          };
          case actionType.SET_SEARCH_TERM:
            return {
              ...state,
              searchTerm: action.searchTerm,
            };
          case actionType.SET_FILTER_TERM:
            return {
              ...state,
              filterTerm: action.filterTerm,
            };
          case actionType.SET_FILTER_BY_NEW_OLD:
            return {
              ...state,
              filterByNewOld: action.filterByNewOld,
            };
          case actionType.SET_PRODUCT_INDEX:
            return{
              ...state,
              productIndex: action.productIndex
            }
    default:
      return state;
  }
};

export default reducer;
