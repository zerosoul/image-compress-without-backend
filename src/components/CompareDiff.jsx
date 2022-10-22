import React from 'react';
import styled from 'styled-components';
const StyledWrapper = styled.section`
  position: relative;
  display: inline-block;
  line-height: 0;
  img {
    user-select: none;
    max-width: 400px;
  }
  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 25px;
    max-width: 100%;
    overflow: hidden;
    resize: horizontal;
    &:before {
      content: '';
      display: block;
      width: 13px;
      height: 13px;
      overflow: hidden;
      position: absolute;
      resize: horizontal;
      right: 3px;
      bottom: 3px;
      background-clip: content-box;
      background: linear-gradient(-45deg, black 50%, transparent 0);
      filter: drop-shadow(0 0 2px black);
    }
  }
`;
export default function CompareDiff() {
  return (
    <StyledWrapper>
      <div>
        <img src="https://2.bp.blogspot.com/-VUtyA1E1LXs/U-tG_FPz0UI/AAAAAAAAIHc/dXifHfeBCUQ/s1600/face-before.jpg" />
      </div>
      <img src="https://1.bp.blogspot.com/-bEQl5-KrxHY/U-tG9gPXbZI/AAAAAAAAIHU/JEI5b_YRpjY/s1600/face-after.jpg" />
    </StyledWrapper>
  );
}
