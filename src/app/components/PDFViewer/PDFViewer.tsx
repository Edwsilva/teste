import React from 'react';
import styles from "./pdf.module.css";

const PDFViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  // Check if the code is running on the client side

  return (
    <p>
      <iframe
        allowTransparency={true}
        scrolling="no"
        src={pdfUrl}
        className={styles.iframe}>
      </iframe>
    </p>
  );
}

export default PDFViewer;
