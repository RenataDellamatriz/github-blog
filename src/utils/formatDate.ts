import * as dateFnsLocales from 'date-fns/locale'
import { Locale } from 'date-fns'
import i18next from 'i18next'

interface Locales {
  [key: string]: Locale
}

const getDateFnsLocale = (): Locale => {
  const locales: Locales = {
    pt: dateFnsLocales.ptBR,
    en: dateFnsLocales.enUS,
    es: dateFnsLocales.es,
  }

  return locales[i18next.language]
}

export default getDateFnsLocale
