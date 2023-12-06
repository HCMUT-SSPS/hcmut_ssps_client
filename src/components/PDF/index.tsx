import { useEffect, useRef, useState, FC } from 'react';
import { debounce } from 'lodash';
import { Document, Outline, Page, pdfjs } from 'react-pdf';

import './index.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFProps {
  renderMode?: 'canvas' | 'svg' | 'none';
  className?: string;
  pageClassName?: string;
  title?: string;
  file?: File | string | undefined;
}

const Pdf: FC<PDFProps> = ({ renderMode, className, pageClassName, file }) => {
  const [numPages, setNumPages] = useState(1);
  const [width, setWidth] = useState<number | undefined>();
  const [isShowOutline, setIsShowOutline] = useState(false);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: { numPages: number }) => {
    setNumPages(nextNumPages);
  };
  const pdfWrapperRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<HTMLCanvasElement[]>([]);
  const outlineRef = useRef<HTMLDivElement>(null);

  const onItemClick = ({ pageNumber }: { pageNumber: number }) => {
    pageRefs.current[pageNumber].scrollIntoView();
  };

  const setWrapperSize = () => {
    setWidth(pdfWrapperRef.current?.clientWidth);
  };

  useEffect(() => {
    const closeOutline = (event: MouseEvent) => {
      if (outlineRef.current && !outlineRef.current.contains(event.target as Node)) {
        setIsShowOutline(false);
      }
    };
    if (isShowOutline) {
      setTimeout(() => {
        window.addEventListener('click', closeOutline);
      }, 0);
      return () => window.removeEventListener('click', closeOutline);
    }
  }, [isShowOutline]);

  useEffect(() => {
    const element = document.getElementById('content-wrapper');
    window.addEventListener('resize', debounce(setWrapperSize, 700));

    return () => {
      element?.removeEventListener('resize', debounce(setWrapperSize, 700));
    };
  }, []);

  useEffect(() => {
    if (pdfWrapperRef.current) {
      setWrapperSize();
    }
  }, [pdfWrapperRef.current?.clientWidth]);

  return (
    <div
      id='pdfWrapperRef'
      className='flex w-full flex-col gap-y-1 text-sm font-medium md:text-sm lg:text-base 2xl:text-lg'
      ref={pdfWrapperRef}
    >
      {width && (
        <Document
          className={`flex flex-row justify-between ${className ?? ''}`}
          renderMode={renderMode ?? 'svg'}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onItemClick={onItemClick}
        >
          <div ref={outlineRef} className='text-sm md:text-xs lg:text-sm 2xl:text-base'>
            <Outline
              onItemClick={onItemClick}
              className={`with-nav-height ${isShowOutline ? '' : 'hidden'}`}
            />
          </div>
          <div className='flex w-full flex-col items-center gap-y-1 lg:gap-y-2 2xl:gap-y-3'>
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                canvasRef={(el) => {
                  if (el) {
                    pageRefs.current[index + 1] = el;
                  }
                }}
                width={width * 0.8}
                className={pageClassName}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                renderMode='canvas'
                scale={1}
              />
            ))}
          </div>
        </Document>
      )}
    </div>
  );
};

export default Pdf;
