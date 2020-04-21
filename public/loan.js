const LoanCalculator = require('loan-calculator').LoanCalculator;
 
var lc = new LoanCalculator();
 
var amortizationSchedule = lc.amortization.getAmortizationSchedule({
    amount: 10000,
    down: 850000,
    deferred: 3,
    term: 60,
    rate: 6.5
}, 60, [
    {
        month: 0,
        payment: 0
    }
]);
 
console.log(JSON.stringify(amortizationSchedule, null, 4));