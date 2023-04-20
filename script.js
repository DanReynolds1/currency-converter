function convertCurrency() {
  // Get the values of the amount, from currency, and to currency fields from the web page.
  const amount = document.getElementById("amount").value;
  const from_currency = document.getElementById("from_currency").value;
  const to_currency = document.getElementById("to_currency").value;

  // Construct the API URL using the values of the from currency and to currency fields.
  const url = `https://api.exchangerate-api.com/v4/latest/${from_currency}`;

  // Send a GET request to the API using the fetch() function.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Parse the JSON response and extract the conversion rate.
      const rate = data.rates[to_currency];

      // Calculate the converted amount and format the result string.
      const converted_amount = amount * rate;
      const result = `${amount} ${from_currency} = ${converted_amount.toFixed(2)} ${to_currency}`;

      // Update the web page with the result string.
      document.getElementById("result").innerHTML = result;
    })
    .catch(error => console.log(error));
}
