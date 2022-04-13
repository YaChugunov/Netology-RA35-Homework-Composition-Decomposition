import React from 'react';
import './assets/css/bottomblock.css';

import BottomBlockCol1 from './components/BottomBlockCol1';
import BottomBlockCol2 from './components/BottomBlockCol2';
import BottomBlockCol3 from './components/BottomBlockCol3';

/**
 * Компонент вывода нижней части страницы (BottomBlock)
 *
 * Вся композиция разделена на три вертикальных блока, в каждом из которых расположены виджеты:
 * - BottomBlockCol1 - Блок 1: Виджеты - Погода, Посещаемое
 * - BottomBlockCol2 - Блок 2: Виджеты - Карта России, Телепрограмма
 * - BottomBlockCol3 - Блок 3: Виджеты - Эфир
 * @function BottomBlock
 * @description Компонент нижней верхней части страницы.
 */
export default function BottomBlock(props) {
  return (
    <div className="bottom-block">
      <div className="bottom-block-col1">
        <BottomBlockCol1 />
      </div>
      <div className="bottom-block-col2">
        <BottomBlockCol2 />
      </div>
      <div className="bottom-block-col3">
        <BottomBlockCol3 />
      </div>
    </div>
  );
}
