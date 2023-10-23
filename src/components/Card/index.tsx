/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom'
import {
  formatRelativeDate,
  truncateTextWithEllipsis,
} from '../../utils/formatter'

import * as S from './styles'

interface PostProps {
  number: number
  title: string
  body: string
  created_at: string
  comments: string
  html_url: string
  user: string
}

export function Card({
  number,
  title,
  body,
  created_at,
  comments,
  html_url,
  user,
}: PostProps) {
  const navigate = useNavigate()

  function handleClickGoToPost() {
    navigate(`/${number}`, {
      state: {
        number,
        title,
        body,
        created_at,
        comments,
        html_url,
        user,
      },
    })
  }

  return (
    <S.Container onClick={handleClickGoToPost}>
      <S.Header>
        <h3>{title}</h3>
        <span>{formatRelativeDate(created_at)}</span>
      </S.Header>
      <S.Main>
        <p>{truncateTextWithEllipsis(body, 200)}</p>
      </S.Main>
    </S.Container>
  )
}
