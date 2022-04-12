import React from 'react';

/**
 * Компонент 'Рекламное объявление'
 * @function TopBlockAdv
 * @description. Вывод рекламного объявления справа от новостей.
 * @param {string} pic путь (url) к картинке объявления
 * @param {string} title заголовок объявления
 * @param {string} text текст объявления
 * @param {string} url ссылка (url) на объявление
 */
export default function TopBlockAdv(props) {
  return (
    <div className="top-block-adv">
      <h3>Реклама</h3>
    </div>
  );
}
