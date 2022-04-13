import React from 'react';

/**
 * Вложенный компонент вывода одиночной ссылки над строкой поиской
 * @function MiddleBlockLinks
 * @description. Вложенный компонент вывода одиночной ссылки над строкой поиской.
 * 
 * @typedef {Object} Props объект ссылок

 * @param {string} props.url ссылка (url)
 * @param {string} props.title название ссылки
 */
export default function MiddleBlockLinks(props) {
  return (
    <span>
      <a href={props.url}>{props.title}</a>
    </span>
  );
}
