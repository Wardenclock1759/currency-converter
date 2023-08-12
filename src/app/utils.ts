export function parse(jsonObject: any) {
  const currencyCodes = [];
  const currencyValues = [];

  for (const key in jsonObject.quotes) {
    const currencyCode = key.replace('RUB', '');
    currencyCodes.push(currencyCode);
    currencyValues.push(jsonObject.quotes[key]);
  }

  return {
    currencyCodes,
    currencyValues
  };
}
