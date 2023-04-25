import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    error: string;
  }
}

const StyledLabel = styled.label<{ error?: boolean }>`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  display: block;
  color: ${(props) =>
    props.error ? 'var(--light-red)' : 'var(--smokey-grey)'};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledInput = styled.input`
  width: 160px;
  height: 72px;
  margin-top: 10px;
  border: 1px solid var(--light-grey);
  border-radius: 8px;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 32px;
  margin-right: 32px;
  font-family: 'Poppins';
  color: black;
  &:focus {
    border: 1px solid var(--purple);
    outline: none;
  }
  @media (max-width: 768px) {
    padding-left: 14px;
    margin-right: 15px;
    margin-top: 6px;
    width: 90px;
    height: 56px;
    font-size: 20px;
  }
`;

const Error = styled.p`
  color: var(--light-red);
  font-size: 12px;
  font-style: italic;
  line-height: 12px;
  position: absolute;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

interface InputProps {
  error?: boolean;
  title: string;
  placeholder: string;
  giveData: (data: string) => void;
}

export default function Input(props: InputProps): JSX.Element {
  return (
    <div>
      <StyledLabel error={props.error} htmlFor={props.title}>
        {props.title}
      </StyledLabel>
      <StyledInput
        id={props.title}
        type="text"
        onBlur={(event) => props.giveData(event.target.value)}
        placeholder={props.placeholder}
      />
      {props.error && <Error>{props.error}</Error>}
    </div>
  );
}
