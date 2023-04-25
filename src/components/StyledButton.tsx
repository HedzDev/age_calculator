import styled from 'styled-components';

const Button = styled.button<{ isDisabled: boolean }>`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: var(--purple);
  border: none;
  position: absolute;
  right: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--off-black);
  }
  @media (max-width: 768px) {
    right: 50%;
    transform: translate(50%, -50%);
    width: 64px;
    height: 64px;
  }
  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

interface ButtonProps {
  handleClick: () => void;
  isDisabled: boolean | any;
}

function StyledButton({ handleClick, isDisabled }: ButtonProps): JSX.Element {
  const handleClickWrapper = () => {
    // this is the wrapper function that checks if the button is disabled or not
    if (!isDisabled) {
      handleClick();
    }
  };
  return (
    <Button onClick={handleClickWrapper} isDisabled={isDisabled}>
      <img
        src="/icon-arrow.svg"
        style={{ width: '100%', height: 'auto' }}
        alt="button"
      />
    </Button>
  );
}

export default StyledButton;
