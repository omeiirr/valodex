import React, { createContext, useState } from 'react';

const StoreContext = createContext(undefined); // to query the context state
const StoreDispatch = createContext(undefined); // to mutate the context state

function StoreProvider({ children }) {
  const [store, setStore] = useState({
    selectedAgent: '41fb69c1-4189-7b37-f117-bcaf1e96f1bf', // Astra as default
    colorTheme: ['#f47dc9', '#a54498', '#5210c6', '#372518'], // color palette of Astra
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
