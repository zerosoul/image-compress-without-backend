import React from 'react';
import styled from 'styled-components';
import ImageUpload from '../assets/img/image-upload.svg';

const StyledWrapper = styled.section`
  position: relative;
  width: 20rem;
  background-color: rgba(222, 222, 222, 0.8);
  box-shadow: 0 0 6px 0px white;
  border: 2px dashed #333;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .img {
    width: 3rem;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .tip {
    font-size: 0.6rem;
    color: #666;
  }
  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;

export default function Input({ compressImages }) {
  const handleChange = evt => {
    compressImages(evt.target.files);
  };
  return (
    <StyledWrapper>
      <input
        accept="image/*"
        multiple
        onChange={handleChange}
        type="file"
        name="images"
        id="images"
      />
      <img className="img" src={ImageUpload} alt="upload image" />
      <h2 className="title">纯前端压缩图片（png、jpg）</h2>
      <h3 className="tip">单张图片不超过5M，最多20张</h3>
    </StyledWrapper>
  );
}
