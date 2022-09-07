import styled from 'styled-components';

export const MovieApplicationContainer = styled.div`
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.9px;
  background: linear-gradient(
    90deg,
    rgba(249, 211, 180, 1) 0%,
    rgba(249, 211, 180, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`;
