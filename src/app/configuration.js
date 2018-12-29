import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { rootReducer } from 'app/store'

const composeEnhancers =
    process.env.NODE_ENV !== 'production'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose

const history = createBrowserHistory()

const configureStore = (initialState: any) => {
    const reducer = combineReducers({
        ...rootReducer
    })
    // $FlowFixMe
    return createStore(
        connectRouter(history)(reducer),
        initialState,
        composeEnhancers(
            applyMiddleware(thunkMiddleware, routerMiddleware(history))
        )
    )
}

export { history, configureStore }
