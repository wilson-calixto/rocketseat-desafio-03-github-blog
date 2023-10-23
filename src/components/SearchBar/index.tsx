import * as S from './styles'

export function SearchBar({ totalCount }: { totalCount: number }) {
  return (
    <S.Container>
      {/* TODO adding variables here */}
      <S.Header>
        <h2>Publicações</h2>
        <span>{totalCount} publicações</span>
      </S.Header>
      <S.Main>
        <input type="text" placeholder="Buscar conteúdo" />
      </S.Main>
    </S.Container>
  )
}
