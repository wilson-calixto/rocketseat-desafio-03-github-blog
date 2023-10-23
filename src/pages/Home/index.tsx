import { ProfileBar } from '../../components/ProfileBar'
import { CardList } from '../../components/CardList'
import { SearchBar } from '../../components/SearchBar'
import { usePost } from '../../hooks/usePost'

export function PageHome() {
  const { data, isLoading, error } = usePost()
  return (
    <>
      <ProfileBar />
      <SearchBar totalCount={data?.total_count | 0} />
      <CardList data={data} isLoading={isLoading} error={error} />
    </>
  )
}
