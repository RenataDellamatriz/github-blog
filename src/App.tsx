import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Loader } from './components/Loader'

import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'pt', 'es'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'htmlTag', 'cookie', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  })

export function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false)
    }, 1000 * 3)

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
