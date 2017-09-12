export const SWITCH_CURRENCY = "SWITCH_CURRENCY";
export const SWITCH_MULTIPLIER = "SWITCH_MULTIPLIER";


 export const selectCurrency = function(baseCurrency, rates){
  return {
    type: "SWITCH_CURRENCY",
    baseCurrency: baseCurrency,
    rates: rates

  };
};

// export default {selectCurrency, setMultiplier};


export const setMultiplier = function(multiplier){
  return {
    type: "SWITCH_MULTIPLIER",
    multiplier: multiplier,
  };

};
// export default setMultiplier;
// window.selectCurrency = selectCurrency;
