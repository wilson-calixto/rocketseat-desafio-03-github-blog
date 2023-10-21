/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'

import { Card } from '../Card'

import * as S from './style'
import { UserProps } from '../ProfileBar'
import { api } from '../../lib/axios'

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
  const [issuesList, setIssuesList] = useState<IssueProps[] | undefined>(
    undefined,
  )

  const getIssuesList = useCallback(async () => {
    try {
      // TODO get information using usemutation
      console.log('dasdfas')
    } catch (error) {
      // TODO make this catch better adding toast
      console.error('Error:', error)
    }
  }, [])

  useEffect(() => {
    getIssuesList()
  }, [getIssuesList])

  console.log({ issuesList })

  return (
    <S.Container>
      {issuesList !== undefined ? (
        issuesList.map((issue) => (
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
        <span>não tem Post</span>
      )}
    </S.Container>
  )
}
