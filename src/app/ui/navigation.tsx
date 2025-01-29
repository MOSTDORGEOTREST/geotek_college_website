'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pages } from '../lib/pages';
import { MouseEventHandler } from 'react';

function Navigation() {
  const pathname = usePathname();

  const onClose = (e: any) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.target !== e.currentTarget) return;

    closeMenu();
  };

  const closeMenu = () => {
    const navMenu = document.getElementById('nav-menu'),
      navWrapper = document.getElementById('nav-wrapper');

    if (!navMenu || !navWrapper) return;

    navMenu.classList.remove('nav-show');
    navWrapper.classList.remove('naw__wrapper-show');
  };

  const toggleSubNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const item = e.currentTarget;
    if (!item || !item.parentElement) return;
    const navItem = item.parentElement.parentElement;
    if (!navItem) return;
    navItem.classList.toggle('show-sub-nav');
  };

  return (
    <div className="nav__wrapper" id="nav-wrapper" onClick={onClose}>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          {pages.map((page) => {
            return page.subs ? (
              <li
                key={`${page.path}`}
                className={
                  pathname == page.path ? 'nav__item active-link' : 'nav__item'
                }
              >
                <div className="nav__item_expandable">
                  <Link
                    className={'nav__link'}
                    href={page.path}
                    onClick={closeMenu}
                  >
                    {page.title}
                  </Link>
                  <button
                    data-spoller
                    type="button"
                    className="button--flex button--nav"
                    onClick={toggleSubNav}
                  >
                    <svg
                      className="button__icon_nav"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                    </svg>
                  </button>
                </div>

                <ul className="nav__sub-nav">
                  {page.subs.map((sub) => {
                    return (
                      <li className="nav__sub-item" key={sub.path}>
                        <Link
                          className="nav__link nav__link_sub"
                          href={sub.path}
                          onClick={closeMenu}
                        >
                          {sub.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ) : (
              <li
                key={`${page.path}`}
                className={
                  pathname == page.path ? 'nav__link active-link' : 'nav__link'
                }
              >
                <Link href={page.path} onClick={closeMenu}>
                  {page.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="nav__close" id="nav-close" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navigation;
