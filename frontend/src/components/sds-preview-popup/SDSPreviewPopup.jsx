import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Dialog } from '@material-ui/core';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SDSPreviewPopup = ({ sdsFile, open, onClose }) => {
  const [pages, setPages] = React.useState([]);

  function onDocumentLoadSuccess({ numPages }) {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(<Page key={i} pageNumber={i} />);
    }

    setPages(pages);
  }

  return (
    <Dialog maxWidth={'md'} onClose={onClose} open={open}>
      {sdsFile && (
        <Document
          file={`data:application/pdf;base64,${sdsFile}`}
          options={{ workerSrc: '/pdf.worker.js' }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {pages.map((el, i) => el)}
        </Document>
      )}
    </Dialog>
  );
};

export default SDSPreviewPopup;
