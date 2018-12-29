import React from 'react'
import ReactDOM from 'react-dom'
import './app/assets/style.css'
import { Provider } from 'react-redux'
import { configureStore } from 'app/configuration'
import { App } from 'app/App'
import { ConnectedIntlProvider } from 'app/i18n/ConnectedIntlProvider'
import Modal from 'react-modal'

const bootApplication = () => {
    const root = document.getElementById('root')
    if (root) {
        Modal.setAppElement(root)
        ReactDOM.render(
            <Provider store={configureStore()}>
                <ConnectedIntlProvider>
                    <App />
                </ConnectedIntlProvider>
            </Provider>,
            root
        )
    }
}

bootApplication()
