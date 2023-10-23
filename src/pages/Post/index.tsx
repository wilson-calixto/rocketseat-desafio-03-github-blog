/* eslint-disable camelcase */
import { UserProps } from '../../components/ProfileBar'
import { PostContent } from '../../components/PostContent'
import { PostHeader } from '../../components/PostHeader'
import { useLocation } from 'react-router-dom'

export interface IssueProps {
  created_at: string
  comments: number
  user: UserProps
  url: string
  title?: string
}

export function Post() {
  const location = useLocation()
  const issueDetails = location.state

  return (
    <>
      <PostHeader
        comments={issueDetails?.comments}
        url={issueDetails?.html_url}
        user={issueDetails?.user}
        created_at={issueDetails?.created_at}
      />
      <PostContent body={issueDetails?.body} />
    </>
  )
}
