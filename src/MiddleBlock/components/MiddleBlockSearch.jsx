import React from 'react';

import MiddleBlockLogo from './MiddleBlockLogo';
import MiddleBlockLinks from './MiddleBlockLinks';

/**
 * Главный компонент блока поиска
 * @function MiddleBlockSearch
 * @description. Главный компонент блока поиска.
 *
 * @typedef {Object} props
 *
 * @param {props} props.links ссылки над строкой поиска
 * @property {string} title название ссылки
 * @property {string} url ссылка (url)
 * @param {Object} Links объект с ссылками над строкой поиска
 */
export default function MiddleBlockSearch(props) {
  const Links = props.links.map((link) => {
    return <MiddleBlockLinks url={link.url} title={link.title} />;
  });
  return (
    <>
      <div className="middle-block-search">
        <MiddleBlockLogo />
        <div className="middle-block-search-main">
          <div className="middle-block-search-main-links">{Links}</div>
          <div className="middle-block-search-main-input">
            <input type="text" />
            <button>Искать</button>
          </div>
        </div>
      </div>
    </>
  );
}
