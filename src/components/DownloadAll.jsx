import React from 'react';
import Zip from 'jszip';
import { saveAs } from 'file-saver';
import StyledButton from './StyledButton';
const zip = new Zip();
export default function DownloadAll({ disabled = false, images = [] }) {
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
    <StyledButton disabled={disabled} className="download" onClick={handleDownloadAll}>
      打包
    </StyledButton>
  );
}
