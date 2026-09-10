// Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to the other unit. The result should be a number, rounded to two decimal places

function convertTemperature(value, unit) {
  if (unit === 'C') return value + 32
  if (unit === 'F') return value - 32
}