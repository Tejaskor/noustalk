document.getElementById('pricingToggle').addEventListener('change', function() {
  const monthlyPrices = [120.95, 59.95]; // Monthly prices for plans
  const yearlyPrices = [120.95 * 12 * 0.9, 59.95 * 12 * 0.9]; // Yearly prices with a 10% discount
  
  let isYearly = this.checked;

  // Update the prices on the page
  const prices = document.querySelectorAll('.pricing-card h2');
  prices[0].textContent = `$${isYearly ? yearlyPrices[0].toFixed(2) : monthlyPrices[0].toFixed(2)}`;
  prices[1].textContent = `$${isYearly ? yearlyPrices[1].toFixed(2) : monthlyPrices[1].toFixed(2)}`;
});
