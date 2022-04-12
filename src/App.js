import React from 'react';
import './style.css';

/**
 * Задание:
 * Разбейте интерфейс на компоненты и в файле каждого компонента напишите
 * буквально одну строку комментария, за что данный компонент отвечает.
 *
 * Постарайтесь повторящиеся компоненты сделать настраемыми за счёт props.
 * Допустим, у каждой новости в списке новостей: иконка, текст и ссылка.
 * Функциональность и стилизацию реализовывать не нужно, достаточно базового
 * оформления (чтобы видно было все блоки).
 *
 */

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
 * @param {number} описание параметра
 */
function TopBlock() {
  return <></>;
}

/**
 * Вы также можете написать введение прямо здесь
 * @function TopBlockNews
 * @description. Если вы продолжите использовать теги для добавления содержимого сюда, оно перезапишет вводное содержимое в первой строке.
 * @param {string} tabs вкладки типов новостей
 * @param {string} icon путь (url) к иконке новости
 * @param {string} text текст новости
 * @param {string} url ссылка (url) на самму новость
 */
function TopBlockNews(props) {
  return <></>;
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

/**
 * @license. MIT
 * Copyright (c) 2022 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * ...
 */
