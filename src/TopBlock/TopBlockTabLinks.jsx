import React from 'react';

/**
 * Компонент 'Новость'
 * @function TopBlockTabLinks
 * @description. Вывод новостей.
 * @param {string} props.icon путь (url) к иконке новости
 * @param {string} props.text текст новости
 * @param {string} props.url ссылка (url) на самму новость
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
