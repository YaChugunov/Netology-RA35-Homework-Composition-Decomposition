import React from 'react';

import MiddleBlockLogo from './MiddleBlockLogo';
import MiddleBlockLinks from '../MiddleBlock/MiddleBlockLinks';

/**
 * Компонент 'Рекламное объявление'
 * @function MiddleBlockSearch
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function MiddleBlockSearch(props) {
  const mappedlinks = props.links.map((link) => {
    return <MiddleBlockLinks link={link.url} title={link.title} />;
  });
  return (
    <>
      <div className="middle-block-search">
        <MiddleBlockLogo />
        <div className="middle-block-search-main">
          <div className="middle-block-search-main-links">{mappedlinks}</div>
          <div className="middle-block-search-main-input">
            <input type="text" />
            <button>Искать</button>
          </div>
        </div>
      </div>
    </>
  );
}
