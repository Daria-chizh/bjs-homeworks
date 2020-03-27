function dateDiffInMonths(startDate, endDate) {
  let termsInFullYears = endDate.getFullYear() - startDate.getFullYear();
  let nowMonth = startDate.getMonth();
  let dateMonth = endDate.getMonth();
  if (nowMonth > dateMonth) {
    termsInFullYears--;
    dateMonth += 12;
  }

  let termInMonths = termsInFullYears * 12 + (dateMonth - nowMonth);
  if (startDate.getDate() < endDate.getDate()) {
    termInMonths++;
  }

  return termInMonths;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  percent = parseInt(percent, 10);
  if (Number.isNaN(percent)) {
    return `Параметр percent содержит неправильное значение ${percent}`;
  }

  contribution = parseInt(contribution, 10);
  if (Number.isNaN(contribution)) {
    return `Параметр contribution содержит неправильное значение ${contribution}`;
  }

  amount = parseInt(amount, 10);
  if (Number.isNaN(amount)) {
    return `Параметр amount содержит неправильное значение ${amount}`;
  }

  const principalAmount = amount - contribution;
  const fraction = percent / 100;
  const monthlyFraction = fraction / 12;
  const termInMonths = dateDiffInMonths(new Date(), date);
  const monthlyPayment = principalAmount * (monthlyFraction + monthlyFraction / (((1 + monthlyFraction) ** termInMonths) - 1));
  const totalPayment = monthlyPayment * termInMonths;
  const roundedTotalPayment = totalPayment.toFixed(2);
  const roundedTotalPaymentNum = Number(roundedTotalPayment);
  console.log(roundedTotalPaymentNum);
  return roundedTotalPaymentNum;
}

function getGreeting(name) {
  if (name === "" || name === null || name === undefined)  {
    name = 'Аноним';
  }

  const message = `Привет, мир! Меня зовут ${name}`;
  console.log(message);
  return message;
}