import React from 'react';
import StyledButton from './StyledButton';

export default function Reset({ resetAll }) {
  const handleClick = () => {
    if (window.confirm('您确定要清空所有数据？')) {
      resetAll();
    }
  };
  return (
    <StyledButton onClick={handleClick} className="reset">
      重置
    </StyledButton>
  );
}
