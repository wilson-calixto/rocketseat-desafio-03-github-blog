/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'

import { Card } from '../Card'

import * as S from './style'
import { UserProps } from '../ProfileBar'
import { api } from '../../api/axios'
import { useQuery } from 'react-query'
import { usePost } from '../../hooks/usePost'

interface IssueProps {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  user: UserProps
  url: string
}

export function CardList() {
  const { data, isLoading, error } = usePost()
  // console.log('data', data)

  return (
    <S.Container>
      {/* {error && <p>Error fetching data</p>} */}
      {isLoading && <p>Fetching data...</p>}
      {data ? (
        data.map((issue) => (
          <Card
            key={issue.number}
            number={issue.number}
            title={issue.title}
            body={issue.body}
            created_at={issue.created_at}
          />
        ))
      ) : (
        // TODO add um value for this situation
        // TODO Refactor the css(make app more resposive) and make integartion ussing hooks and add loading status
        <span>Nenhum post encontrado</span>
      )}
    </S.Container>
  )
}
