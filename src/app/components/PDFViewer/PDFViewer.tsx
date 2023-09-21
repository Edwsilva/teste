'use client'
import React from 'react';
import styles from "./pdf.module.css";
import Button from '../Button/Button';
import { useState } from 'react';

type PDFViewerProps = {
  url: {
    success: boolean;
    href: string;
  }
}

const PDFViewer = (props: PDFViewerProps) => {
  const [pdfOpen, setPdfOpen] = useState<boolean>(false);

  return (
    <>
      {pdfOpen ?
        <p>
          <iframe
            allowTransparency={true}
            src={props.url.href}
            className={styles.iframe}>
          </iframe>
        </p>
        :
        ""}
      <Button text={pdfOpen ? "Fechar Cardápio" : "Cardápio das Unidades Educacionais"} fn={() => setPdfOpen(!pdfOpen)} />
    </>
  );
}

export default PDFViewer;
