import React from 'react';

/**
 * Компонент 'Новость'
 * @function TopBlockNewsLinks
 * @description. Вывод новостей.
 * @param {string} props.icon путь (url) к иконке новости
 * @param {string} props.text текст новости
 * @param {string} props.url ссылка (url) на самму новость
 */
export default function TopBlockNewsLinks(props) {
  return (
    <>
      <li key={props.id}>
        <a href={props.url}>
          <img className="" src={props.icon} />
          <span className="">{props.title}</span>
        </a>
      </li>
    </>
  );
}
