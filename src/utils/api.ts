import axios from 'axios'

export const typicodeAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const ROUTE = {
  HOME: '/',
  USER: '/:id',
  POSTS: '/posts',
}
