// @ts-nocheck

import { useContext } from 'react';
import { agentIds } from '../data/agentIds';
import { StoreContext, StoreDispatch } from './Store';

export const SelectDropdown = () => {
  const globalStore = useContext(StoreContext);
  const setGlobalStore = useContext(StoreDispatch);

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setGlobalStore({
      ...globalStore,
      selectedAgent: e.target.value,
    });
  };
  return (
    <div className='flex justify-center'>
      <select
        className='my-[-20px] w-full p-2 text-base text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded-md font-primary bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
        aria-label='Default select example'
        onChange={handleChange}
        title='Choose an agent'
      >
        {agentIds.map((agent) => (
          <option
            value={agent.uuid}
            selected={globalStore.selectedAgent === agent.uuid}
          >
            {agent.name}
          </option>
        ))}
      </select>
    </div>
  );
};
