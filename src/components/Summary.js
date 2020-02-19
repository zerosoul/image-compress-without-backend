import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.section`
  padding: 1.4rem;
`;
export default function Summary({ totalSize = 0, totalCompressedSize = 0 }) {
  const reduceSize = totalSize - totalCompressedSize;
  const humanSize =
    reduceSize / 1024 > 1024
      ? `${(reduceSize / 1024 / 1024).toFixed(2)}M`
      : `${(reduceSize / 1024).toFixed(2)}KB`;
  return (
    <StyledWrapper>
      <div className="percent">{`节省了：${Math.floor((reduceSize * 100) / totalSize)}%`}</div>
      <div className="size">{`总计：${humanSize}`}</div>
    </StyledWrapper>
  );
}
