/**
 * Returns a new Intl.NumberFormat object that formats currency values according to the given options.
 * @param {string} locale - a BCP 47 language tag
 * @param {{style: 'currency', currency: string, minimumFractionDigits: number, maximumFractionDigits: number}} options - an object that specifies currency format options
 * @returns {Intl.NumberFormat} a NumberFormat object that formats currency values
 */
export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
