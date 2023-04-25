import { useState, useEffect } from 'react';

/**
 * @description useError hook that controls the errors of the input fields
 * @param inputDay
 * @param inputMonth
 * @param inputYear
 *
 */

export default function useError(
  inputDay: number | null,
  inputMonth: number | null,
  inputYear: number | null
): [string | null, string | null, string | null] {
  // return an array of strings or null
  const [dayError, setDayError] = useState<string | null>(null);
  const [monthError, setMonthError] = useState<string | null>(null);
  const [yearError, setYearError] = useState<string | null>(null);

  const actualYear = new Date().getFullYear(); // get the actual year

  useEffect(() => {
    // useEffect hook that controls the errors of the input fields
    // Control day
    setDayError(
      !inputDay
        ? 'This field is required'
        : inputDay < 1 || inputDay > 31
        ? 'Must be a valid day'
        : null
    );

    // Control month
    setMonthError(
      !inputMonth
        ? 'This field is required'
        : inputMonth < 1 || inputMonth > 12
        ? 'Must be a valid month'
        : null
    );

    // Control year
    setYearError(
      !inputYear
        ? 'This field is required'
        : inputYear > actualYear
        ? 'Must be in the past'
        : null
    );
  }, [inputDay, inputMonth, inputYear, actualYear]); // the useEffect hook will be called when the inputDay, inputMonth, inputYear or actualYear changes

  return [dayError, monthError, yearError]; // return an array of strings or null
}
