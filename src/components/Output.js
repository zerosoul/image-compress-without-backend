import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getSizeFormated } from '../utils';
import { AniRotate } from './animates';

import ImageLoading from '../assets/img/loading.svg';

import ImageDownload from '../assets/img/download.svg';

const StyledWrapper = styled.section`
  margin-top: 1.5rem;
  max-height: 80vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.2rem 0.8rem 1.2rem;
  border: 1px dashed #555;
  border-radius: 4px;
  background-color: rgba(222, 222, 222, 0.5);

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 26rem;
    padding: 0.2rem 0.5rem;
    background-color: #f0f0f0;
    margin-top: 0.1rem;
    text-align: right;
    font-size: 0.5rem;
    border: 1px solid #bbcbd0;
    background-color: rgba(222, 222, 222, 0.8);
    font-weight: 600;
    &.compressing {
      position: relative;
      &:after {
        content: '';
        background-image: url(${ImageLoading});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 0.8rem;
        display: block;
        width: 1rem;
        height: 1rem;
        position: absolute;
        right: -1.2rem;
        top: 50%;
        margin-top: -0.5rem;
        animation: ${AniRotate} 1s infinite;
      }
    }
    .name {
      text-align: left;
      padding: 0.2rem 0;
      color: #222;
      width: 10rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .size {
      color: #7eb631;
      width: 3rem;
    }
    .arrow {
      color: #7eb631;
    }

    .savePercent {
      color: #222;
      width: 3rem;
    }
    .download {
      width: 1rem;
      img {
        width: 100%;
        filter: drop-shadow(1px 1px 1px #333);
        &.clicked {
          filter: none;
        }
      }
    }
  }
`;

export default function Output({ images }) {
  useEffect(() => {
    console.log({ images });
  }, [images]);
  const handleDownloadClick = e => {
    e.target.classList.add('clicked');
  };
  return (
    <StyledWrapper className={images.length === 0 ? 'hidden' : ''}>
      {images.map(img => {
        const { name, size, compressed } = img;
        let { size: compressSize } = compressed || { size: 0 };
        compressSize = compressSize > size ? size : compressSize;
        const reduceSize = compressSize == 0 ? 0 : size - compressSize;
        return (
          <div key={name} className={`item ${compressSize == 0 ? 'compressing' : ''}`}>
            <span className="name">{name}</span>
            <span className="size before">{`${getSizeFormated(size)}`}</span>
            <span className="arrow">&gt;</span>
            <span className="size after">{`${
              compressSize == 0 ? '?' : getSizeFormated(compressSize)
            }`}</span>
            <div className="savePercent">{`-${Math.floor((reduceSize * 100) / size)}%`}</div>
            <a
              href={
                compressSize !== undefined
                  ? URL.createObjectURL(reduceSize == 0 ? img : compressed)
                  : '#'
              }
              download={`icfe-${name}`}
              className="download"
            >
              <img onClick={handleDownloadClick} src={ImageDownload} alt="download" />
            </a>
          </div>
        );
      })}
    </StyledWrapper>
  );
}
