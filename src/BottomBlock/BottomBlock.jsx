import React from 'react';
import './bottomblock.css';

import BottomBlockCol1 from './Column1/BottomBlockCol1';
import BottomBlockCol2 from './Column2/BottomBlockCol2';
import BottomBlockCol3 from './Column3/BottomBlockCol3';

/**
 * Компонент вывода верхней части страницы (TopBlock):
 * - блок новостей (TopBlockNews)
 * - блок рекламы
 * @function TopBlock
 * @description компонент вывода верхней части страницы
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
