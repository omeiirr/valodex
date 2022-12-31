// @ts-nocheck

import { useContext } from 'react';
import { StoreContext } from './Store';

export const ColorPalette = () => {
  const globalStore = useContext(StoreContext);
  let colorTheme = globalStore?.colorTheme;

  return (
    <div className='mt-12'>
      <p>Click on the tile to copy hex code</p>

      <div className='flex items-center gap-3'>
        {colorTheme.map((color, idx) => (
          <div
            key={idx}
            className='grid items-center w-20 h-20 text-center text-white border-4 border-white rounded-md shadow-xl outline-1 font-semi bold '
            style={{ background: '#' + color }}
          >
            #{color.slice(0, -2)}
          </div>
        ))}
      </div>
    </div>
  );
};
