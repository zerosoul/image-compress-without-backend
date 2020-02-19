import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageDownload from '../assets/img/download.svg';
const StyledWrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1rem 0.8rem 1rem;
  border: 1px solid #bbcbd0;
  border-radius: 4px;
  background-color: rgba(222, 222, 222, 0.5);
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 32rem;
    padding: 0.4rem 0.8rem;
    background-color: #f0f0f0;
    margin-top: 0.3rem;
    text-align: right;
    .name {
      padding: 0.2rem 0;
      color: #222;
      width: 10rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .size {
      color: #7eb631;
      width: 4rem;
    }

    .savePercent {
      width: 4rem;
    }
    .download {
      width: 2rem;
      &:visited img {
        background-color: #333;
      }
    }
  }
`;

export default function Output({ images }) {
  useEffect(() => {
    console.log({ images });
  }, [images]);
  return (
    <StyledWrapper>
      {images.map(img => {
        const { name, size, compressed = {} } = img;
        let { size: compressSize } = compressed;
        compressSize = compressSize > size ? size : compressSize;
        const reduceSize = size - compressSize;
        return (
          <div key={img.name} className="item">
            <span className="name">{name}</span>
            <span className="size before">{`${(size / 1024).toFixed(2)}KB`}</span>
            <span className="size after">{`${(compressSize / 1024).toFixed(2)}KB`}</span>
            <div className="savePercent">{`-${Math.floor((reduceSize * 100) / size)}%`}</div>
            <a
              href={
                compressed.name !== undefined
                  ? URL.createObjectURL(reduceSize == 0 ? img : compressed)
                  : '#'
              }
              download={`icfe-${name}`}
              className="download"
            >
              <img src={ImageDownload} alt="download" />
            </a>
          </div>
        );
      })}
    </StyledWrapper>
  );
}
