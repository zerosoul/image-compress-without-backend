import React, { Suspense, useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import GithubRibbon from './components/GithubRibbon';
import InfoModal from './components/InfoModal';
import Loading from './components/Loading';
import Summary from './components/Summary';
import Reset from './components/Reset';
import Compressing from './components/Compressing';
import DownloadAll from './components/DownloadAll';
import Input from './components/Input';
import Output from './components/Output';

// const Footer = lazy(() => import('./components/Footer'));
import styled from 'styled-components';
const StyledBody = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  .opts {
    width: 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const options = {
  maxSizeMB: 0.5,
  maxWidthOrHeight: 600, // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
  maxIteration: 2
};
const App = () => {
  const [compressing, setCompressing] = useState(false);
  const [originSize, setOriginSize] = useState(0);
  const [compressSize, setCompressSize] = useState(0);
  const [images, setImages] = useState([]);
  const handleCompress = async files => {
    setCompressing(true);
    console.log(files);
    const fileArr = [...files];
    const ds = [];
    try {
      const promises = [...files].map(async img => {
        console.log(`Received File`, img);
        // const blob = b64toBlob(e.target.result);
        const compressedFile = await imageCompression(img, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024} KB`); // smaller than maxSizeMB
        ds.push(compressedFile);
      });

      await Promise.all(promises);
    } catch (error) {
      console.log(error);
    }
    console.log({ ds });
    fileArr.forEach((file, idx) => {
      file.compressed = ds[idx];
    });
    setImages(prev => {
      return [...prev, ...fileArr];
    });
    setCompressing(false);
  };
  useEffect(() => {
    let originSize = 0;
    let compressedSize = 0;
    images.forEach(img => {
      const {
        size,
        compressed: { size: cSize }
      } = img;
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
    <Suspense fallback={<Loading />}>
      <StyledBody>
        <Input compressImages={handleCompress} />
        {compressing && <Compressing />}
        {images.length > 0 && <Output images={images} />}
        {images.length > 0 && (
          <div className="opts">
            <Reset disabled={compressing} resetAll={resetAll} />{' '}
            <DownloadAll disabled={compressing} images={images} />
          </div>
        )}
        {images.length > 0 && <Summary totalSize={originSize} totalCompressedSize={compressSize} />}
        <GithubRibbon />
        <InfoModal />
      </StyledBody>
    </Suspense>
  );
};
export default App;
