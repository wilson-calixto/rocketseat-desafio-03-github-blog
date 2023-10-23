import { ProfileBar } from '../../components/ProfileBar'
import { CardList } from '../../components/CardList'
import { SearchBar } from '../../components/SearchBar'
import { usePost } from '../../hooks/usePost'

export function PageHome() {
  const { data, filtredPosts, isLoading, error, searchPosts } = usePost()
  return (
    <>
      <ProfileBar />
      <SearchBar totalCount={data?.total_count | 0} searchPosts={searchPosts} />
      <CardList
        posts={filtredPosts || data?.items}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}
