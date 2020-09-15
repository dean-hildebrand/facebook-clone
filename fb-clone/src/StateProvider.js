import React, { createContext, useContext, useReducer } from 'react'

// preparing the data layer
export const StateContext = createContext();

// higher order component used to wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
  {children}
  </StateContext.Provider>
);

// hook to use the data
export const useStateValue = () => useContext(StateContext)
