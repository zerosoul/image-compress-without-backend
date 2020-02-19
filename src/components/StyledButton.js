import styled from 'styled-components';
import ImageReset from '../assets/img/clear.svg';
import ImageZip from '../assets/img/zip.svg';
const StyledButton = styled.button`
  background-size: 1.4rem;
  background-position: 0.4rem center;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.8rem 0.5rem 1.8rem;
  border-bottom: 2px solid #788990;
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  color: #fff;
  margin: 1rem;
  &.reset {
    background-color: #1081de;
    border-bottom-color: #056ec5;
    text-shadow: 0.1rem 0.1rem 0 #0561ae;
    background-image: url(${ImageReset});
  }
  &.download {
    background-color: #0aa574;
    border-bottom-color: #029365;
    text-shadow: 0.1rem 0.1rem 0 #018259;
    background-image: url(${ImageZip});
  }
`;

export default StyledButton;
