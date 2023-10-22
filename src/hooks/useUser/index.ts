import { useQuery } from '@tanstack/react-query'
import { URL, api } from '../../api/axios'

const queryUsers = async (username: string) => {
  const response = api
    .get(URL.getUsersByUsername(username))
    .then((response) => response.data)

  return response
}

export function useUser(username: string): any {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return queryUsers(username)
    },
  })

  return { data, isLoading, error }
}
