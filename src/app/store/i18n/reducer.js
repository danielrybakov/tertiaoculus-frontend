import type { Action } from './actions'
import { en, fr } from 'app/i18n/locales'

const locales = {
    fr,
    en
}

export type State = {|
    +locale: 'fr' | 'en',
    +messages: {
        [key: string]: string
    }
|}

export const reducer = (state: State = locales.en, action: Action): State => {
    switch (action.type) {
        case 'CHANGE_LOCALE':
            return {
                ...locales[action.locale]
            }
        default:
            return state
    }
}
