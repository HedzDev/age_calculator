import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 840px;
  height: 650px;
  margin: 50px auto;
  background-color: var(--white);
  border-radius: 24px 24px 200px 24px;
  padding: 56px;
  @media (max-width: 768px) {
    padding: 48px 20px;
    height: 480px;
    width: 360px;
    border-radius: 24px 24px 100px 24px;
  }
`;
