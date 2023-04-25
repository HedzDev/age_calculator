/**
 * @description Substract two dates and return the difference in years, months and days
 * @param inputDay
 * @param inputMonth
 * @param inputYear
 * @returns { years: number, months: number, days: number }
 */

export const substractDate = (
  inputDay: number,
  inputMonth: number,
  inputYear: number
) => {
  const actualDate = new Date(); // Today
  const inputDate = new Date(inputYear, inputMonth - 1, inputDay); // Input date (from user)

  const yearDiff = actualDate.getFullYear() - inputDate.getFullYear(); // Difference between years
  const monthDiff = actualDate.getMonth() - inputDate.getMonth(); // Difference between months
  const dayDiff = actualDate.getDate() - inputDate.getDate(); // Difference between days

  let resultYear = yearDiff; // Result year
  let resultMonth = monthDiff; // Result month
  let resultDay = dayDiff; // Result day

  if (dayDiff < 0) {
    // If day difference is negative, we need to substract 1 month and add the days of the last month
    resultMonth -= 1; // Substract 1 month
    const daysInLastMonth = new Date(inputYear, inputMonth - 1, 0).getDate(); // Get the days of the last month
    resultDay = daysInLastMonth + dayDiff; // Add the days of the last month to the day difference
  }

  if (monthDiff < 0) {
    // If month difference is negative, we need to substract 1 year and add 12 months
    resultYear -= 1; // Substract 1 year
    resultMonth += 12; // Add 12 months
  }

  return { years: resultYear, months: resultMonth, days: resultDay }; // Return the result
};
