import styled from 'styled-components';

const StyledNum = styled.span`
  color: var(--purple);
`;

const StyledText = styled.h1`
  font-size: 105px;
  font-style: italic;
  margin: 0;
  line-height: 116px;
  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 62px;
  }
`;

interface TextProps {
  num: number;
  text: string;
}

export default function Text({ text, num }: TextProps): JSX.Element {
  const displayValue = isNaN(num) ? '--' : num;
  return (
    <StyledText>
      <StyledNum>{displayValue}</StyledNum> {text}
    </StyledText>
  );
}
