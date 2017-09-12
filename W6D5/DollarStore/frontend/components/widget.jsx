import React from 'react';
import Currency from './currency';
import {setMultiplier} from '../actions';
import {selectCurrency} from '../actions';

class Widget extends React.Component {

  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);

    // require this component to re-render whenever the store's state changes
    this.props.store.subscribe(this.forceUpdate);
    this.currencies = ["USD", "EUR", "CAD", "JPY", "GBP", "CNY"];
    this.selectCurrency = selectCurrency.bind(this);
    this.setMultiplier = setMultiplier.bind(this);
  }

  fetchRates(currency) {
    $.ajax({
      url: `http://api.fixer.io/latest?base=${currency}`,
      type: "GET",
      dataType: "JSON",
      success: function(resp) {
        // console.log(resp);

        // tell the store to update with the new base currency and rates;
        // use the action creator 'selectCurrency' to build the object to
        // be dispatched
        this.props.store.dispatch(
          this.selectCurrency(resp.base, resp.rates)
        );
      }.bind(this)
    });
  }
  handleMultiplier() {
    console.log(this.refs.input.value);
    this.props.store.dispatch(
      this.setMultiplier(this.refs.input.value)
    );
  }

  render() {

    // get the store's current state and deconstruct it into 'rates'
    // and 'baseCurrency' variables
    const { rates, baseCurrency, multiplier } = this.props.store.getState();
    // const {multipli} = this.props.store.getState();

    const currencyOptions = this.currencies.map( (currency) => (
        <div onClick={ () => { this.fetchRates(currency) }}
             key={currency}
             className="currency-option">
          {currency}
        </div>
      )
    );
    console.log(Object.keys(rates));
    console.log(multiplier);
    const currencyNames = Object.keys(rates);
    // if (Object === true) {
    //    currencyNames = Object.keys(rates);
    // } else {
    //    currencyNames = "";
    // }
    const currencyRates = currencyNames.map( (currency) => (
      <Currency name={currency}
                rate={rates[currency]}
                key={currency} />
      )
    );

    return (
      <div>
        <h1>Currency Exchange Rates</h1>
        <h3>Base Currency: {baseCurrency}</h3>

        <div className="currency-selector">
          Get Rates:
          {currencyOptions}
        </div>
        <h3>Conversion Multiplier :
          <input placeholder="Set Multiplier" ref='input' onChange={this.handleMultiplier.bind(this)} />
          {multiplier}
        </h3>
        <div className="rates-list">
          {currencyRates}
        </div>
      </div>
    );
  }
};


export default Widget;
