import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.button`
  padding: 1.4rem;
`;
export default function Reset({ resetAll }) {
  return <StyledWrapper onClick={resetAll}>清空</StyledWrapper>;
}
