/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { UserProps } from '../../components/ProfileBar'

import { PostContent } from '../../components/PostContent'
import { PostHeader } from '../../components/PostHeader'
import { api } from '../../api/axios'
import { useParams } from 'react-router-dom'

export interface IssueProps {
  title?: string | undefined
  body?: string | undefined
  created_at?: string | undefined
  comments?: number | undefined
  user?: UserProps | undefined
  url?: string | undefined
}

export function Post() {
  const { number } = useParams()

  const [issueDetails, setIssueDetails] = useState<IssueProps | null>(null)

  const getIssueDetails = useCallback(async () => {
    try {
      // TODO Adding this conde in a hook and add env variables
      // const response = await api.get(
      //   `/repos/walterjaworski/rocketseat-github-blog/issues/${number}`,
      // )
      // const { title, body, created_at, comments, user, url } = response.data
      // const newData: IssueProps = {
      //   title,
      //   body,
      //   created_at,
      //   comments,
      //   user,
      //   url,
      // }
      // setIssueDetails(newData)
    } catch (error) {
      console.error('Error:', error)
    }
  }, [])

  useEffect(() => {
    getIssueDetails()
  }, [getIssueDetails])

  return (
    <>
      <PostHeader
        title={issueDetails?.title}
        created_at={issueDetails?.created_at}
        comments={issueDetails?.comments}
        url={issueDetails?.url}
        user={issueDetails?.user}
      />
      <PostContent body={issueDetails?.body} />
    </>
  )
}
