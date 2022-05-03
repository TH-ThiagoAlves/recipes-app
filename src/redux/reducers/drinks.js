const INITIAL_STATE = {
  drinks: [],
  categories: [],
  drinkdetails: [],
};
const drinks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ('GET_DRINKS'):
    return {
      ...state,
      drinks: action.drinks.drinks,
    };
  case 'GET_DRINK_CATEGORIES':
    return {
      ...state,
      categories: action.categories.drinks,
    };
  case 'GET_DRINK_DETAILS':
    return {
      ...state,
      drinkdetails: action.drink.drinks,
    };
  default:
    return state;
  }
};
export default drinks;
