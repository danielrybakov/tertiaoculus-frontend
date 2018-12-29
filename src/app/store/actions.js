import { ws } from './endpoints'
import type { Dispatch } from 'redux'

export type ActionError = {
    type: 'ERROR',
    error: any
}

export type ActionAPIError = {
    type: 'PAGE_API_ERROR',
    page: string,
    error: any
}

const fetchPageData = (page: string, actionType: string, platform?: string) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const response = await ws.get(page, {
                params: { platform: platform || 'ALL' }
            })
            dispatch({
                type: actionType,
                data: {
                    ...response.data,
                    error: false
                }
            })
        } catch (error) {
            console.error(error)
            dispatch(actionAPIError(error, page))
        }
    }
}

const actionError = (error: any): ActionError => ({
    type: 'ERROR',
    error: error
})

const actionAPIError = (error: any, page: string): ActionAPIError => ({
    type: 'PAGE_API_ERROR',
    page: page,
    error: error
})

const managePageAPIError = (
    state: any,
    action: ActionAPIError,
    path: string
): any => {
    if (action.page === path) {
        return {
            ...state,
            error: action.error
        }
    } else {
        return state
    }
}
export { fetchPageData, actionError, actionAPIError, managePageAPIError }
