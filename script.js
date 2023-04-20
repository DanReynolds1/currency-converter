function convertCurrency() {
  // Get the values of the amount, from currency, and to currency fields from the web page.
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  // Construct a URL that includes the values of the amount, from currency, and to currency fields as query parameters.
  const url = `/convert?amount=${amount}&from_currency=${fromCurrency}&to_currency=${toCurrency}`;

  // Send a GET request to the URL using the fetch() function in JavaScript.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Parse the JSON response that is returned by the Flask API.
      const rate = data.rates[toCurrency];
      const convertedAmount = amount * rate;
      const result = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;

      // Update the web page with the converted amount.
      document.getElementById("result").innerHTML = result;
    })
    .catch(error => console.log(error));
}
