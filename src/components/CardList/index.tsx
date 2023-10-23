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
  posts: any
  isLoading: boolean
  error: boolean
}

export function CardList({ posts, isLoading, error }: CardListProps) {
  if (error) return <p>Error fetching data</p>

  return (
    <S.Container>
      {isLoading && <p>Fetching data...</p>}
      {posts?.length > 0 ? (
        posts.map((issue: IssueProps) => (
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
        <span>Nenhum post encontrado</span>
      )}
    </S.Container>
  )
}
