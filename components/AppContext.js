import React, { createContext, useState, useContext, memo } from 'react'

const AppContext = createContext([{}, () => {}])

const AppProvider = memo(({ children, defaultValue = {} }) => {
  const [state, setState] = useState(defaultValue)
  const setItemState = item => setState(currentState => ({ ...currentState, ...item }))
  return (
    <AppContext.Provider value={{ state, setState, setItemState }}>
      {children}
    </AppContext.Provider>
  )
})

const useAppContext = () => useContext(AppContext)

export { AppContext, AppProvider, useAppContext }
