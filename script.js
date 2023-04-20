function convertCurrency() {
  var amount = document.getElementById("amount").value;
  var from_currency = document.getElementById("from_currency").value;
  var to_currency = document.getElementById("to_currency").value;

  var url = `https://api.exchangerate-api.com/v4/latest/${from_currency}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to_currency];
      const converted_amount = amount * rate;
      const result = `${amount} ${from_currency} = ${converted_amount.toFixed(2)} ${to_currency}`;
      document.getElementById("result").innerHTML = result;
    })
    .catch(error => console.log(error));
}
