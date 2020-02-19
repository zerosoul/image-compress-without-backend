import React from 'react';
import StyledButton from './StyledButton';

export default function Reset({ resetAll }) {
  return (
    <StyledButton className="reset" onClick={resetAll}>
      清空
    </StyledButton>
  );
}
