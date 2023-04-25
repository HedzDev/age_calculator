import styled from 'styled-components';

const Button = styled.button`
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
`;

interface ButtonProps {
  handleClick: () => void;
}

function StyledButton({ handleClick }: ButtonProps): JSX.Element {
  return (
    <Button onClick={handleClick}>
      <img
        src="/icon-arrow.svg"
        style={{ width: '100%', height: 'auto' }}
        alt="button"
      />
    </Button>
  );
}

export default StyledButton;
