// @ts-nocheck

import { useContext } from 'react';
import { StoreContext } from './Store';

export const ColorPalette = () => {
  const globalStore = useContext(StoreContext);
  let colorTheme = globalStore?.colorTheme;

  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-semibold'>Color Palette</h2>

      <div className='flex items-center gap-3 mt-2'>
        {colorTheme.map((color, idx) => (
          <div
            key={idx}
            className='grid items-center w-20 h-20 text-xs font-semibold text-center text-white border-4 border-white rounded-md shadow-xl outline-1 '
            style={{ background: '#' + color }}
          >
            #{color.slice(0, -2)}
          </div>
        ))}
      </div>
      <p className='mt-3 '>Click on the tile to copy hex code</p>
    </div>
  );
};
