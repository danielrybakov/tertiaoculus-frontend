import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const ws = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || '',
    timeout: 10000,
    adapter: setupCache({
        maxAge: 10 * 60 * 1000
    }).adapter
})

const endpoints = {
    pages: {
        posts: `/public/posts`
    }
}

export { endpoints, ws }
