import React from 'react';

/**
 * Вложенный компонент вывода одиночной новости
 * @function TopBlockNewsLinks
 * @description. Вложенный компонент вывода разделов новостей.
 *
 * @typedef {Object} Props
 * @param {props} props набор текущих новостей
 * @property {number} props.id идентификатор новости
 * @property {string} props.icon путь (url) к иконке новости
 * @property {string} props.title название новости
 * @property {string} props.url ссылка (url) на самму новость
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
