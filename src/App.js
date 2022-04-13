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

import TopBlock from './TopBlock/TopBlock';
import MiddleBlock from './MiddleBlock/MiddleBlock';
import BottomBlock from './BottomBlock/BottomBlock';

export default function App() {
  return (
    <div className="container">
      <TopBlock />
      <MiddleBlock />
      <BottomBlock />
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
