import { CaretDown, Check, Globe } from 'phosphor-react'
import * as Select from '@radix-ui/react-select'

import {
  LanguageSelectorButton,
  SelectContent,
  SelectItem,
  SelectPortal,
} from './styles'

interface LanguageProps {
  language: string
  changeLanguage: (laguage: string) => void
}

export function LanguageSelect({ language, changeLanguage }: LanguageProps) {
  return (
    <Select.Root value={language} onValueChange={changeLanguage}>
      <LanguageSelectorButton>
        <CaretDown size={20} />
        <Globe />
      </LanguageSelectorButton>

      <SelectPortal>
        <SelectContent>
          <Select.Viewport>
            <Select.Group>
              <SelectItem value="en">
                <Select.ItemText>English</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </SelectItem>
              <SelectItem value="pt">
                <Select.ItemText>Português</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </SelectItem>
              <SelectItem value="es">
                <Select.ItemText>Español</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </SelectContent>
      </SelectPortal>
    </Select.Root>
  )
}
