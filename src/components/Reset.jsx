import React from 'react';
import StyledButton from './StyledButton';

export default function Reset({ disabled = false, resetAll }) {
  const handleClick = () => {
    if (window.confirm('您确定要清空所有数据？')) {
      resetAll();
    }
  };
  return (
    <StyledButton disabled={disabled} onClick={handleClick} className="reset">
      重置
    </StyledButton>
  );
}
