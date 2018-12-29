import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
// $FlowFixMe
import en from 'react-intl/locale-data/en.js'

addLocaleData(en)

function mapStateToProps(state) {
    const { locale, messages } = state.i18nState
    return { key: locale, locale, messages }
}

const ConnectedIntlProvider = connect(mapStateToProps)(IntlProvider)

export { ConnectedIntlProvider }
