import React, { createContext, useState } from 'react';

const StoreContext = createContext(undefined); // to query the context state
const StoreDispatch = createContext(undefined); // to mutate the context state

function StoreProvider({ children }) {
  const [store, setStore] = useState({
    selectedAgent: '1e58de9c-4950-5125-93e9-a0aee9f98746', // Killjoy as default
    colorTheme: ['ffc300ff', 'b87b00ff', '413950ff', '614414ff'], // color palette of Killjoy
  });

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatch.Provider value={setStore}>
        {children}
      </StoreDispatch.Provider>
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext, StoreDispatch };
