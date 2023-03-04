export function currencyFormatterNumber(valueInCents: number): string {
  const value = valueInCents / 100;
  return `${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
}
