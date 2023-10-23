/* eslint-disable camelcase */
import { useCallback, useEffect, useState } from 'react'
import { UserProps } from '../../components/ProfileBar'

import { PostContent } from '../../components/PostContent'
import { PostHeader } from '../../components/PostHeader'
import { api } from '../../api/axios'
import { useLocation, useParams } from 'react-router-dom'

export interface IssueProps {
  title?: string | undefined
  body?: string | undefined
  created_at?: string | undefined
  comments?: number | undefined
  user?: UserProps | undefined
  url?: string | undefined
}

export function Post() {
  const location = useLocation()
  const issueDetails = location.state
  console.log('issueDetails', issueDetails)

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
