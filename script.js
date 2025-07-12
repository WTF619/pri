// a) Welcoming message only on top page
document.getElementById("welcomeMessage").innerText = "Welcome to Prianta's CarHub! 🚗 Let's find your perfect ride.";

// c) JavaScript Function - Estimate Monthly Loan Payment
function calculateLoan() {
  const price = parseFloat(document.getElementById("carPrice").value);
  const months = parseInt(document.getElementById("months").value);
  if (!price || !months || price <= 0 || months <= 0) {
    document.getElementById("loanResult").innerText = "Please enter valid price and month.";
    return;
  }
  const monthly = (price / months).toFixed(2);
  document.getElementById("loanResult").innerText = `Estimated Monthly Payment: ¥${monthly}`;
}