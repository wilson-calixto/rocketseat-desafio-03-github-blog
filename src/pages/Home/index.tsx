import { ProfileBar } from '../../components/ProfileBar'
import { CardList } from '../../components/CardList'
import { SearchBar } from '../../components/SearchBar'

export function PageHome() {
  return (
    <>
      <ProfileBar />
      <SearchBar />
      <CardList />
    </>
  )
}
