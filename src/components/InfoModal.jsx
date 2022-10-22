/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn';
import ImageInfo from '../assets/img/info.svg';
import ImageClose from '../assets/img/close.svg';
import ImageReward from '../assets/img/reward.jpg';
import { AniSlideLeft } from './animates';
const InfoButton = styled.button`
  background-size: 1rem 1rem;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(2, 2, 2, 0.6);
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 8px black;
  transition: background-image 0.5s;
  z-index: 998;
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  padding: 0.8rem;
  margin-right: 0.5rem;
  background-image: url(${ImageInfo});
  &.close {
    background-image: url(${ImageClose});
  }
`;
const StyledModal = styled.section`
  z-index: 998;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px rgba(181, 177, 187);
  position: fixed;
  right: 0.5rem;
  bottom: 2.5rem;
  background: #d0d4d3;
  padding: 1rem;
  visibility: hidden;
  padding: 1rem;
  &.visible {
    visibility: visible;
    animation: ${AniSlideLeft} 1s;
  }
  .reward {
    width: 14rem;
    align-self: flex-start;
    margin-bottom: 1.8rem;
    position: relative;
    img {
      width: 80%;
      border: 1px solid rgba(181, 177, 187);
    }
    &:after {
      content: attr(title);
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: left;
      font-size: 0.8rem;
      bottom: -1rem;
      text-shadow: 0 0 8px #a09090;
    }
  }

  .line {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    &.title {
      font-size: 1.4rem;
      font-weight: 800;
    }
    &.github > span {
      margin-right: 0.4rem;
    }
  }
  .copyright {
    font-size: 0.5rem;
    a {
      padding: 0 0.2rem;
    }
  }
`;
const Modal = ({ visible = false }) => (
  <StyledModal className={visible ? 'visible' : ''}>
    <div className="line title">纯浏览器图片压缩工具</div>
    <div className="line github">
      <GitHubButton
        href="https://github.com/zerosoul/image-compress-without-backend"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star zerosoul/image-compress-without-backend on GitHub"
      >
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/zerosoul/image-compress-without-backend/fork"
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork zerosoul/image-compress-without-backend on GitHub"
      >
        Fork
      </GitHubButton>
    </div>
    <div className="reward" title="如果有帮助到您，欢迎打赏~">
      <img src={ImageReward} alt="reward" title="如果有帮助到您，欢迎打赏~" />
    </div>
    <div className="copyright">
      <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
      <span> Copyright © {new Date().getFullYear()} By </span>
      <a rel="noopener noreferrer" href="https://yangerxiao.com" target="_blank">
        Tristan
      </a>
    </div>
  </StyledModal>
);
export default function InfoModal() {
  const [visible, setVisible] = useState(false);
  const handleInfoClick = () => {
    setVisible(prev => !prev);
  };

  return (
    <>
      <Modal visible={visible} />

      <InfoButton
        className={`idleHide ${visible ? 'close' : ''}`}
        onClick={handleInfoClick}
      ></InfoButton>
    </>
  );
}
