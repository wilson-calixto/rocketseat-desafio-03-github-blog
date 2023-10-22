import { useQuery } from '@tanstack/react-query'
import { URL, api } from '../../api/axios'

const queryPosts = async () => {
  const response = api.get(URL.getAllPosts()).then((response) => response.data)

  return response
}

export function usePost(): any {
  const { data, isLoading, error } = [undefined, false, false] // = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: queryPosts,
  // })

  return { data, isLoading, error }
}
