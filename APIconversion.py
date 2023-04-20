import subprocess
import json

# Define the curl command as a string with your app_id and target currency
curl_cmd = "curl --request GET --url 'https://openexchangerates.org/api/latest.json?app_id=6b9c815551e64dfca0874d53d9b4ddf6&symbols=USD,EUR,GBD,JPY,ILS,CDN' --header 'accept: application/json'"

# Call the curl command and capture its output
output = subprocess.check_output(curl_cmd, shell=True)

# Parse the JSON data from the output
data = json.loads(output)

# Get the exchange rates for USD and the target currency
usd_rate = data['rates']['USD']
target_rate = data['rates'][target_currency]

# Get the input amount and currency code from the user
input_amount = float(input('Enter the amount to convert: '))
input_currency = input('Enter the currency code to convert from (e.g. USD): ')

# Calculate the output amount using the exchange rates from the API
output_amount = input_amount * (target_rate / usd_rate)

# Display the output amount
print('{:.2f} {} = {:.2f} {}'.format(input_amount, input_currency, output_amount, target_currency))
