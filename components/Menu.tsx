// @ts-nocheck

import { useContext } from 'react';
import { selectRandomAgent } from '../helpers/selectRandomAgent';
import { SelectDropdown } from './SelectDropdown';
import { StoreContext, StoreDispatch } from './Store';

export const Menu = () => {
  // Context API
  const globalStore = useContext(StoreContext);
  const setGlobalStore = useContext(StoreDispatch);

  const setRandomAgent = () => {
    let randomAgent = selectRandomAgent();
    console.log('randomAgent', randomAgent.uuid);

    setGlobalStore({ ...globalStore, selectedAgent: randomAgent.uuid });
  };

  return (
    <div className='flex items-center justify-between w-full max-w-md gap-4 p-3 bg-gray-200 rounded-md '>
      <div className='flex flex-1'>
        <SelectDropdown />
      </div>

      <button
        className='flex-1 p-2 px-4 rounded-md shadow-lg bg-cyan-500'
        onClick={setRandomAgent}
      >
        Pick a Random Agent
      </button>
    </div>
  );
};
