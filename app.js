// https://calculator.swiftutors.com/days-sales-outstanding-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const daysSalesOutstandingRadio = document.getElementById('daysSalesOutstandingRadio');
const totalReceivablesRadio = document.getElementById('totalReceivablesRadio');
const totalCreditSalesRadio = document.getElementById('totalCreditSalesRadio');
const daysinSalesRadio = document.getElementById('daysinSalesRadio');

let daysSalesOutstanding;
let totalReceivables = v1;
let totalCreditSales = v2;
let daysinSales = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

daysSalesOutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Receivables';
  variable2.textContent = 'Total Credit Sales';
  variable3.textContent = 'Days in Sales';
  totalReceivables = v1;
  totalCreditSales = v2;
  daysinSales = v3;
});

totalReceivablesRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales Outstanding (DSO)';
  variable2.textContent = 'Total Credit Sales';
  variable3.textContent = 'Days in Sales';
  daysSalesOutstanding = v1;
  totalCreditSales = v2;
  daysinSales = v3;
});

totalCreditSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales Outstanding (DSO)';
  variable2.textContent = 'Total Receivables';
  variable3.textContent = 'Days in Sales';
  daysSalesOutstanding = v1;
  totalReceivables = v2;
  daysinSales = v3;
});

daysinSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Days Sales Outstanding (DSO)';
  variable2.textContent = 'Total Receivables';
  variable3.textContent = 'Total Credit Sales';
  daysSalesOutstanding = v1;
  totalReceivables = v2;
  totalCreditSales = v3;
});

btn.addEventListener('click', function() {
  
  if(daysSalesOutstandingRadio.checked)
    result.textContent = `Days Sales Outstanding = ${computeDaysSalesOutstanding().toFixed(2)}`;

  else if(totalReceivablesRadio.checked)
    result.textContent = `Total Receivables = ${computeTotalReceivables().toFixed(2)}`;

  else if(totalCreditSalesRadio.checked)
    result.textContent = `Total Credit Sales = ${computeTotalCreditSales().toFixed(2)}`;

  else if(daysinSalesRadio.checked)
    result.textContent = `Days in Sales = ${computeDaysinSales().toFixed(2)}`;
})

// calculation

function computeDaysSalesOutstanding() {
  return (Number(totalReceivables.value) / Number(totalCreditSales.value)) * Number(daysinSales.value);
}

function computeTotalReceivables() {
  return (Number(daysSalesOutstanding.value) * Number(totalCreditSales.value)) / Number(daysinSales.value);
}

function computeTotalCreditSales() {
  return (Number(totalReceivables.value) / Number(daysSalesOutstanding.value)) * Number(daysinSales.value);
}

function computeDaysinSales() {
  return (Number(daysSalesOutstanding.value) * Number(totalCreditSales.value)) / Number(totalReceivables.value);
}