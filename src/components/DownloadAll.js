import React from 'react';
import Zip from 'jszip';
import { saveAs } from 'file-saver';
import StyledButton from './StyledButton';
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
  return (
    <StyledButton className="download" onClick={handleDownloadAll}>
      下载全部
    </StyledButton>
  );
}
