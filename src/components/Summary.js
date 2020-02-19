import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.section`
  padding: 1.4rem 1.6rem;
  background-color: rgba(222, 222, 222, 0.8);
  border: 2px dashed #333;
  border-radius: 5px;
  display: flex;
  align-items: center;
  .tip {
    font-size: 1rem;
  }
  .percent {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .size {
    font-size: 0.6rem;
    font-weight: 800;
    color: #7eb631;
    align-self: flex-end;
    margin-left: 1rem;
  }
`;
export default function Summary({ totalSize = 0, totalCompressedSize = 0 }) {
  const reduceSize = totalSize - totalCompressedSize;
  const humanSize =
    reduceSize / 1024 > 1024
      ? `${(reduceSize / 1024 / 1024).toFixed(2)}M`
      : `${(reduceSize / 1024).toFixed(2)}KB`;
  return (
    <StyledWrapper>
      <div className="tip">为您节省：</div>
      <div className="percent">{`${Math.floor((reduceSize * 100) / totalSize)}%`}</div>
      <div className="size">{`${humanSize}`}</div>
    </StyledWrapper>
  );
}
