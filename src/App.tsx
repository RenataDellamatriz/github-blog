import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Loader } from './components/Loader'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false)
    }, 1000 * 4)

    return () => {
      clearTimeout(delay)
    }
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </ThemeProvider>
  )
}
