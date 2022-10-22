import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import LeaveConfirm from './components/LeaveConfirm';
import InfoModal from './components/InfoModal';
import Summary from './components/Summary';
import Reset from './components/Reset';
import DownloadAll from './components/DownloadAll';
import Input from './components/Input';
import Output from './components/Output';

import styled from 'styled-components';
const StyledBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  .opts {
    width: 15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hidden {
    visibility: hidden;
  }
`;
const options = {
  maxSizeMB: 0.4,
  maxWidthOrHeight: 750, // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
  maxIteration: 2,
};
const App = () => {
  const [compressing, setCompressing] = useState(false);
  const [originSize, setOriginSize] = useState(0);
  const [compressSize, setCompressSize] = useState(0);
  const [images, setImages] = useState([]);
  const handleCompress = async (files) => {
    setCompressing(true);
    console.log(files);
    const fileArr = [...files];
    setImages((prev) => {
      return [...prev, ...fileArr];
    });
    const ds = [];
    try {
      const promises = [...files].map(async (img) => {
        console.log(`Received File`, img);
        // const blob = b64toBlob(e.target.result);
        const compressedFile = await imageCompression(img, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024} KB`); // smaller than maxSizeMB
        ds.push(compressedFile);
        img.compressed = compressedFile;
        setImages((prev) => {
          const tmpIdx = prev.findIndex((file) => file.name == img.name);
          prev[tmpIdx] = img;
          return [...prev];
        });
      });

      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }
    console.log({ ds });
    setCompressing(false);
  };
  useEffect(() => {
    let originSize = 0;
    let compressedSize = 0;
    images.forEach((img) => {
      const { size, compressed } = img;
      const { size: cSize } = compressed || { size: 0 };
      originSize = originSize + size;
      compressedSize = compressedSize + (cSize > size ? size : cSize);
    });
    setOriginSize(originSize);
    setCompressSize(compressedSize);
  }, [images]);
  const resetAll = () => {
    setImages([]);
  };
  return (
    <StyledBody>
      <LeaveConfirm trigger={images.length > 0} />
      <Input compressImages={handleCompress} />
      <Output images={images} />
      <div className={`opts ${images.length === 0 ? 'hidden' : ''}`}>
        <Reset disabled={compressing} resetAll={resetAll} />{' '}
        <DownloadAll disabled={compressing} images={images} />
      </div>
      <Summary
        visible={images.length > 0}
        totalSize={originSize}
        totalCompressedSize={compressSize}
      />
      <InfoModal />
    </StyledBody>
  );
};
export default App;
