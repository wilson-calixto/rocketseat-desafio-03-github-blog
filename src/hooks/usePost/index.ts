import { useQuery } from '@tanstack/react-query'
import { URL, api } from '../../api/axios'
import { useDebounce } from '../useDebounce'
import { IssueProps } from '../../pages/Post'
import { useState } from 'react'

const queryAllPosts = async () => {
  const response = api.get(URL.getAllPosts()).then((response) => response.data)
  return response
}

export function usePost(): any {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return queryAllPosts()
    },
  })
  const [filtredPosts, setFiltredPosts] = useState<[]>(data?.items)

  function searchPosts(search: string) {
    const filteredPosts = data.items.filter((post: IssueProps) => {
      return post.title?.toLowerCase().includes(search.toLowerCase())
    })
    setFiltredPosts(filteredPosts)
  }

  const searchPostsDebounced = useDebounce(searchPosts, 500)

  return {
    data,
    filtredPosts,
    isLoading,
    error,
    searchPosts: searchPostsDebounced,
  }
}
