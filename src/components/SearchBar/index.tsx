import * as S from './styles'
export interface ISearchBarProps {
  totalCount: number
  searchPosts: (search: string) => void
}

export function SearchBar({ totalCount, searchPosts }: ISearchBarProps) {
  return (
    <S.Container>
      <S.Header>
        <h2>Publicações</h2>
        <span>{totalCount} publicações</span>
      </S.Header>
      <S.Main>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(event) => searchPosts(event.target.value)}
        />
      </S.Main>
    </S.Container>
  )
}
