function convertCurrency() {
    var urlParams = new URLSearchParams(window.location.search);
    var amount = urlParams.get("amount");
    var from_currency = urlParams.get("from_currency");
    var to_currency = urlParams.get("to_currency");

    fetch(`/convert?amount=${amount}&from_currency=${from_currency}&to_currency=${to_currency}`)
        .then(response => response.text())
        .then(data => {
            var result = parseFloat(data).toFixed(2);
            document.getElementById("converted-amount").innerHTML = result;
        });
}
