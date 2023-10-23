/* eslint-disable camelcase */
import { Card } from '../Card'
import * as S from './style'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: string
  comments: string
  html_url: string
  user: string
}

interface CardListProps {
  data: any
  isLoading: boolean
  error: boolean
}

export function CardList({ data, isLoading, error }: CardListProps) {
  return (
    <S.Container>
      {error && <p>Error fetching data</p>}
      {isLoading && <p>Fetching data...</p>}
      {data?.items?.length > 0 ? (
        data?.items.map((issue: IssueProps) => (
          <Card
            key={issue.number}
            number={issue.number}
            title={issue.title}
            body={issue.body}
            created_at={issue.created_at}
            comments={issue.comments}
            html_url={issue.html_url}
            user={issue.user}
          />
        ))
      ) : (
        // TODO add um value for this situation
        // TODO Refactor the css(make app more resposive)
        <span>Nenhum post encontrado</span>
      )}
    </S.Container>
  )
}
