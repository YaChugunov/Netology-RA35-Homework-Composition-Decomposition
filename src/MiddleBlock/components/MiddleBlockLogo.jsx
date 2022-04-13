import React from 'react';

/**
 * Компонент 'Рекламное объявление'
 * @function MiddleBlockLogo
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function MiddleBlockLogo(props) {
  return (
    <div className="middle-block-search-logo">
      <div>
        <img src="https://yastatic.net/s3/home-static/_/6/L/sRWLDRTog6jt1kgf7Kg3BQ71g.svg" />
      </div>
    </div>
  );
}
