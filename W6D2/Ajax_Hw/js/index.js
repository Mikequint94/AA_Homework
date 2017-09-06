console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("Here is the Weather");
    console.log(data);
    console.log(`The Weather today is ${parseInt(data.main.temp)} in Kelvin`);
    console.log(`The Weather today is ${parseInt(data.main.temp)-273} in Celcius`);
    console.log(`The Weather today is ${(parseInt(data.main.temp)-273)*1.8+32} in Fahrenheit`);
    let nyTemp = (parseInt(data.main.temp)-273)*1.8+32;
    return nyTemp;
  },
  error() {
    console.error("An error has occurred :(");
  }


});

// Add another console log here, outside your AJAX request
console.log("hello from the bottom of the pageee!");
