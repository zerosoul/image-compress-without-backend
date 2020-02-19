import React from 'react';
import styled, { keyframes } from 'styled-components';
import ImageLoading from '../assets/img/loading.svg';
const AniRotate = keyframes`
from{
  transform:rotate(0);
}
to{
  transform:rotate(360deg);
}
`;
const StyledWrapper = styled.section`
  background-color: rgba(222, 222, 222, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 999;
  padding: 1.4rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    width: 2rem;
    animation: ${AniRotate} 1s infinite;
  }
`;
export default function Compressing() {
  return (
    <StyledWrapper>
      <img className="loading" src={ImageLoading} alt="loading" />
    </StyledWrapper>
  );
}
