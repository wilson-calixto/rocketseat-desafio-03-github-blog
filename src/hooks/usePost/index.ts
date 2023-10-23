import { useQuery } from '@tanstack/react-query'
import { URL, api } from '../../api/axios'

const queryAllPosts = async () => {
  const response = api.get(URL.getAllPosts()).then((response) => response.data)

  return response
}

const queryPostsByText = async (query: string) => {
  const response = api
    .get(URL.getPostsByText(query))
    .then((response) => response.data)

  return response
}

export function usePost(query?: string): any {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return query ? queryPostsByText(query) : queryAllPosts()
    },
  })

  return { data, isLoading, error }
}
