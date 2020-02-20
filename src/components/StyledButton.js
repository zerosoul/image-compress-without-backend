import styled from 'styled-components';
import ImageReset from '../assets/img/clear.svg';
import ImageZip from '../assets/img/zip.svg';
const StyledButton = styled.button`
  background-size: 1.2rem;
  background-position: 0.4rem center;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.6rem 0.3rem 1.8rem;
  border-bottom: 2px solid #788990;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  color: #fff;
  margin: 1rem;
  &.reset {
    background-color: #1081de;
    border-bottom-color: #056ec5;
    text-shadow: 0.1rem 0.1rem 0 #0561ae;
    background-image: url(${ImageReset});
    &:hover {
      background-color: #088cf9;
      border-bottom-color: #0575d1;
    }
  }
  &.download {
    background-color: #0aa574;
    border-bottom-color: #029365;
    text-shadow: 0.1rem 0.1rem 0 #018259;
    background-image: url(${ImageZip});
    &:hover {
      background-color: #02c487;
      border-bottom-color: #029c6b;
    }
  }
`;

export default StyledButton;
