import React from 'react';

/**
 * Вложенный компонент вывода разделов новостей
 * @function TopBlockTabLinks
 * @description. Вложенный компонент вывода разделов новостей.
 *
 * @typedef {Object} Props
 * @param {props} props вкладки разделов новостей
 * @property {number} props.id идентификатор вкладки
 * @property {string} props.title название вкладки
 * @property {string} props.url ссылка (url) на страницу вкладки
 */
export default function TopBlockTabLinks(props) {
  return (
    <span>
      <a href={props.url} key={props.id}>
        {props.title}
      </a>
    </span>
  );
}
