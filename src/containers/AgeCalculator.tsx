import { useState } from 'react';
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

  const [dayError, monthError, yearError] = useError(
    inputDay,
    inputMonth,
    inputYear
  );

  const handleClick = () => {
    if (!dayError && !monthError && !yearError) {
      // if there are no errors

      const years = parseInt(String(inputYear)); // convert to string and then to number
      const months = parseInt(String(inputMonth)); // convert to string and then to number

      if (!Number.isNaN(years) && !Number.isNaN(months)) {
        // if the input is a number then call the function that calculates the age
        setResultDate(substractDate(inputDay, months, years)); // call the function that calculates the age
      } else {
        setResultDate({
          // if the input is not a number then set the result to '--'
          years: '--',
          months: '--',
          days: '--',
        });
      }
    } else {
      // if there are errors then set the result to '--'
      setResultDate({
        years: '--',
        months: '--',
        days: '--',
      });
    }
  };

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
        <StyledButton handleClick={handleClick} />
      </StyledDiv>

      <Text num={Number(resultDate.years)} text="years" />
      <Text num={Number(resultDate.months)} text="months" />
      <Text num={Number(resultDate.days)} text="days" />
    </Container>
  );
}
