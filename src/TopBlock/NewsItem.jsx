import React from 'react';

/**
 * Компонент 'Новость'
 * @function NewsItem
 * @description. Вывод новостей.
 * @param {string} props.icon путь (url) к иконке новости
 * @param {string} props.text текст новости
 * @param {string} props.url ссылка (url) на самму новость
 */
export default function NewsItem(props) {
  return (
    <>
      <li>
        {props.icon}
        <a href={props.url}>{props.text}</a>
      </li>
    </>
  );
}
