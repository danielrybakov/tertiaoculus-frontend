import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { history } from './configuration'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Home } from './home'
import { Posts } from './posts'
import { Contact } from './contact'

type Props = {
    intl: any
}

class AppComponent extends Component<Props> {
    componentDidMount() {
        console.log('did mount')
    }

    render() {
        const { intl } = this.props
        return (
            // $FlowFixMe
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path={intl.formatMessage({ id: 'routes.posts' })}
                        component={Posts}
                    />
                    <Route
                        exact
                        path={intl.formatMessage({
                            id: 'routes.contact'
                        })}
                        component={Contact}
                    />
                </Switch>
            </Router>
        )
    }
}

const App = injectIntl(connect()(AppComponent))

export { App }
