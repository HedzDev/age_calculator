import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { substractDate } from '../utils/substractDate';

import { Container } from '../components/Container';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';

import useError from '../hooks/useError';

interface ResultDate {
  years: string | number;
  months: string | number;
  days: string | number;
}

const StyledDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  border-top: 1px solid var(--off-white);
  position: relative;
  @media (max-width: 764px) {
    margin-top: 56px;
    margin-bottom: 56px;
  }
`;

/**
 * @description AgeCalculator component that calculates the age of a person
 * @param {number} inputDay
 * @param {number} inputMonth
 * @param {number} inputYear
 * @param {string} resultDate
 * @returns
 */

export default function AgeCalculator() {
  const [resultDate, setResultDate] = useState<ResultDate>({
    years: '--',
    months: '--',
    days: '--',
  });

  const [inputYear, setinputYear] = useState<number>(0);
  const [inputMonth, setinputMonth] = useState<number>(0);
  const [inputDay, setinputDay] = useState<number>(0);
  const [displayDay, setDisplayDay] = useState<number>(0);
  const [displayMonth, setDisplayMonth] = useState<number>(0);
  const [displayYear, setDisplayYear] = useState<number>(0);

  const [dayError, monthError, yearError] = useError(
    inputDay,
    inputMonth,
    inputYear
  );

  const handleClick = () => {
    if (dayError || monthError || yearError) {
      // if there is an error in the input fields then return
      setResultDate({
        years: '--',
        months: '--',
        days: '--',
      });
      return;
    }

    const years = parseInt(String(inputYear)); // convert the inputYear to a number
    const months = parseInt(String(inputMonth)); // convert the inputMonth to a number

    if (Number.isNaN(years) || Number.isNaN(months)) {
      // if the inputYear or inputMonth is not a number then return
      setResultDate({
        years: '--',
        months: '--',
        days: '--',
      });
      return;
    }

    setResultDate(substractDate(inputDay, months, years)); // calculate the age of the person
  };

  useEffect(() => {
    // this useEffect is used to display the result of the calculation in a smooth way
    if (displayDay < Number(resultDate.days)) {
      // if the displayDay is less than the resultDate.days then add 1 to the displayDay
      const interval = setInterval(() => {
        // set an interval to add 1 to the displayDay
        setDisplayDay(displayDay + 1);
      }, 110);

      return () => clearInterval(interval); // clear the interval when the component unmounts
    }
  }, [displayDay, resultDate.days]);

  useEffect(() => {
    if (displayMonth < Number(resultDate.months)) {
      const interval = setInterval(() => {
        setDisplayMonth(displayMonth + 1);
      }, 150);

      return () => clearInterval(interval);
    }
  }, [displayMonth, resultDate.months]);

  useEffect(() => {
    if (displayYear < Number(resultDate.years)) {
      const interval = setInterval(() => {
        setDisplayYear(displayYear + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [displayYear, resultDate.years]);

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <StyledInput
          title="Day"
          placeholder="DD"
          giveData={(day) => setinputDay(Number(day))} // convert to number because the input is a string
          error={dayError || undefined}
        />
        <StyledInput
          title="Month"
          placeholder="MM"
          giveData={(day) => setinputMonth(Number(day))}
          error={monthError || undefined}
        />
        <StyledInput
          title="Year"
          placeholder="YYYY"
          giveData={(day) => setinputYear(Number(day))}
          error={yearError || undefined}
        />
      </div>
      <StyledDiv>
        <StyledButton
          handleClick={handleClick}
          isDisabled={!inputDay || !inputMonth || !inputYear}
        />
      </StyledDiv>
      <Text num={displayYear || Number(resultDate.years)} text="years" />{' '}
      {/* if the displayYear is not 0 then display the displayYear otherwise display the resultDate.years */}
      <Text num={displayMonth || Number(resultDate.months)} text="months" />
      <Text num={displayDay || Number(resultDate.days)} text="days" />
    </Container>
  );
}
