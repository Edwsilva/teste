import React from 'react';
import styles from "./pdf.module.css";

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {

  return (
    <p>
      <iframe
        allowTransparency={true}
        src={pdfUrl}
        className={styles.iframe}>
      </iframe>
    </p>
  );
}

export default PDFViewer;
