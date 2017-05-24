
const convertMonthNameToNumber = (monthName) => {
  const date = new Date(`${monthName} 1, 2000`);
  const monthDigit = date.getMonth();
  return isNaN(monthDigit) ? 0 : (monthDigit + 1);
}

export default {
  convertMonthNameToNumber,
}
