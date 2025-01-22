import Image from 'next/image';
import { FileItem } from '../lib/mdgt-files';

export default function FileCard(item: FileItem) {
  return (
    <>
      <div className="file__card">
        <div className="file__circle"></div>

        <a href={item.src} target="_blank" className="file__img-link">
          <Image
            src={item.back ? item.back : '/base_back.png'}
            alt="File back"
            className="file__img"
            width={624}
            height={814}
          />
        </a>

        <div className="file__description">
          <h3 className="file__title">{item.title}</h3>
          <span className="file__year"></span>
        </div>
        <a
          href={item.src}
          target="_blank"
          className="button--flex file__button"
          title="View file"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM7 6H11V10H7V6ZM7 12H17V14H7V12ZM7 16H17V18H7V16ZM13 7H17V9H13V7Z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}
