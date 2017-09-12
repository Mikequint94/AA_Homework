const initialState = {
  baseCurrency: "Please select",
  rates: {},
  multiplier: 1
};

const reducer = (state = initialState, action) => {
  // Object.freeze(state);
  switch(action.type) {
    case "SWITCH_CURRENCY":
      return {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };
    case "SWITCH_MULTIPLIER":
      return {
        multiplier: action.multiplier
      };
    default:
      return state;
  }
};

// window.reducer = reducer;

export default reducer;
