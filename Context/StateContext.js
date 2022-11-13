import React, { createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()

export const StateContext = ( { children } ) => {
    const [theme, setTheme] = useState('')

    return (
        <Context.Provider
            value = {{
                theme, setTheme
            }}
            >
                { children }
            </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)