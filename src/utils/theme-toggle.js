import React, { useContext } from 'react'
import useLocalStorage from 'react-use-localstorage'

const ThemeTogglerContext = React.createContext()

export const useThemeToggle = () => useContext(ThemeTogglerContext)

// eslint-disable-next-line react/prop-types
export const ThemeToggleProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <>
      <ThemeTogglerContext.Provider
        value={{
          toggleTheme: () => {
            if (theme === 'light') {
              setTheme('dark')
            } else {
              setTheme('light')
            }
          },
          theme,
        }}
      >
        {children}
      </ThemeTogglerContext.Provider>
    </>
  )
}
