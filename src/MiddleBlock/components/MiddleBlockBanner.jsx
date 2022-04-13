import React from 'react';

/**
 * Компонент 'Рекламное объявление'
 * @function MiddleBlockBanner
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function MiddleBlockBanner(props) {
  return (
    <div className="middle-block-banner">
      <h4>Баннер</h4>
    </div>
  );
}
