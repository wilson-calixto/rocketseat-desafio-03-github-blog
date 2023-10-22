import axios from 'axios'

export const URL = {
  getAllPosts: () => `/users`,
  getUsersByUsername: (username: string) => `/users/${username}`,
}

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
