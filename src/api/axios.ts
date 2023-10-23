import axios from 'axios'

export const URL = {
  getAllPosts: () =>
    `/search/issues?q=%20repo:wilson-calixto/rocketseat-desafio-03-github-blog`,
  getPostsByText: (query: string) =>
    `search/issues?q=${query}repo:rocketseat-desafio-03-github-blog`,
  getUsersByUsername: (username: string) => `/users/${username}`,
}

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
