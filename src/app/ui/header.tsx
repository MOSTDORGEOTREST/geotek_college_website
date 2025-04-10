'use client';

import Image from 'next/image';

import Navigation from './navigation';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [showTheme, setShowTheme] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback(() => {
    // console.log('yOffset', pageYOffset, 'scrollY', scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleNav = () => {
    const navMenu = document.getElementById('nav-menu'),
      navWrapper = document.getElementById('nav-wrapper');

    if (!navMenu || !navWrapper) return;

    navWrapper.classList.add('naw__wrapper-show');
    navMenu.classList.add('nav-show');
  };

  const toggleTheme = () => {
    setShowTheme(!showTheme);
  };

  const setContrast = () => {
    const contrastTheme = 'contrast-theme';

    document.body.classList['add'](contrastTheme);
  };

  const setStandart = () => {
    const contrastTheme = 'contrast-theme';

    document.body.classList['remove'](contrastTheme);
  };

  const setNormal = () => {
    const contrastTheme = 'big-theme';

    document.body.classList['remove'](contrastTheme);
  };

  const setBig = () => {
    const contrastTheme = 'big-theme';

    document.body.classList['add'](contrastTheme);
  };

  const [showCookie, setShowCookie] = useState(true);

  useEffect(() => {
    if (!getCookie()) {
      setShowCookie(true);
    } else {
      setShowCookie(false);
    }
  }, []);

  function getCookie() {
    const nameEQ = 'allowCookies=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function acceptCookies() {
    let expires = '';
    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
    document.cookie = 'allowCookies=' + '1' + expires + '; path=/';
    setShowCookie(false);
  }

  return (
    <>
      <div
        className={
          scrollY > 80
            ? 'flex items-center justify-between header header-scroll'
            : 'flex items-center justify-between header'
        }
      >
        <div
          className={
            showTheme ? 'nav container theme' : 'nav container theme none'
          }
        >
          <div className="theme-item">
            <div className="theme-header">ЦВЕТ САЙТА</div>
            <div className="theme-buttons">
              <button className="theme-button" onClick={setStandart}>
                Стандартный
              </button>
              <button className="theme-button" onClick={setContrast}>
                Контрастный
              </button>
            </div>
          </div>
          <div className="theme-item">
            <div className="theme-header">ШРИФТ</div>
            <div className="theme-buttons">
              <button className="theme-button" onClick={setNormal}>
                Нормальный
              </button>
              <button className="theme-button" onClick={setBig}>
                Большой
              </button>
            </div>
          </div>
        </div>
        <div className="nav container">
          <Link href={'/'} className="flex items-center nav__logo">
            <div className="flex items-center justify-center md:w-12 nav__logo-icon">
              <Image
                className="hidden md:block"
                src="/logo_company.png"
                alt="Geotek College Logo"
                width={3261}
                height={2623}
                priority
              />
            </div>
            <div className="nav__logo">ГЕОТЭК КОЛЛЕДЖ</div>
          </Link>
          <Navigation />
          <div className="nav__btns">
            <div className="nav__theme" onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M1 12C1 9.23858 3.23858 7 6 7C7.21392 7 8.32661 7.43307 9.19203 8.1515C9.91366 7.44003 10.905 7 12 7C13.095 7 14.0863 7.44003 14.808 8.1515C15.6734 7.43307 16.7861 7 18 7C20.7614 7 23 9.23858 23 12C23 14.7614 20.7614 17 18 17C15.2386 17 13 14.7614 13 12C13 11.1835 13.1964 10.411 13.5445 9.72905C13.177 9.28296 12.6209 9 12 9C11.3791 9 10.823 9.28296 10.4555 9.72905C10.8036 10.411 11 11.1835 11 12C11 14.7614 8.76142 17 6 17C3.23858 17 1 14.7614 1 12Z"></path>
              </svg>
            </div>

            <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {showCookie ? (
        <div className="cookies__box">
          <div className="cookies__info">
            <div>Для работы сайта мы используем файлы cookie.</div>
          </div>
          <div className="cookies__accept-btns">
            <button
              type="button"
              title="Принять cookie"
              className="cookies__accept-btn"
              onClick={acceptCookies}
            >
              Принять
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
