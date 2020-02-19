import React from 'react';
import styled from 'styled-components';
import Zip from 'jszip';
import { saveAs } from 'file-saver';
const StyledWrapper = styled.button`
  padding: 1.4rem;
`;
const zip = new Zip();
export default function DownloadAll({ images = [] }) {
  const handleDownloadAll = () => {
    images.forEach(img => {
      zip.file(img.name, img.compressed);
    });
    zip.generateAsync({ type: 'blob' }).then(function(content) {
      // see FileSaver.js
      saveAs(content, `icfe-${new Date().getTime()}.zip`);
    });
  };
  return <StyledWrapper onClick={handleDownloadAll}>下载全部</StyledWrapper>;
}
