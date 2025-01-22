'use client';

import { mdgtFilesProg1, mdgtFilesProg2 } from '../lib/mdgt-files';
import { geotekFiles } from '../lib/geotek-files';
import FileCard from '../ui/file-card';

export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section__title-center">Документы</h1>
        <h3 className="section__title-center">ГЕОТЕК КОЛЛЕДЖ</h3>
        <div className="files__container">
          {geotekFiles.map((file) => {
            return (
              <FileCard
                key={file.title}
                src={file.src}
                title={file.title}
                back={file.back}
              />
            );
          })}
        </div>
        <h3 className="section__title-center">Курсы повышения квалификации</h3>
        <div className="files__container">
          {mdgtFilesProg1.map((file) => {
            return (
              <FileCard
                key={file.title}
                src={file.src}
                title={file.title}
                back={file.back}
              />
            );
          })}
          {mdgtFilesProg2.map((file) => {
            return (
              <FileCard
                key={file.title}
                src={file.src}
                title={file.title}
                back={file.back}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
