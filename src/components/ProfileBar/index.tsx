/* eslint-disable camelcase */
import { Github } from 'styled-icons/fa-brands'
import {
  Building,
  UserGroup,
  ArrowUpRightFromSquare,
} from 'styled-icons/fa-solid'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

export interface UserProps {
  avatarUrl: string
  bio: string
  htmlUrl: string
  login: string
  name: string
  location: string
  company: string
  followers: number
}

export function ProfileBar() {
  const [userData, setUserData] = useState<UserProps | null>(null)

  const getUserData = useCallback(async () => {
    // TODO get information using usemutation
  }, [])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  return (
    <S.Container>
      {/* TODO add alt */}

      <S.Avatar>
        <img src={userData?.avatarUrl || ''} alt="" width="148" height="148" />
      </S.Avatar>
      <S.Data>
        {/* TODO change this for link */}
        <S.DataHeader>
          <h1>{userData?.name || 'Loading...'}</h1>
          <strong>
            <a href={userData?.htmlUrl || '#'}>
              Github <ArrowUpRightFromSquare size={18} />
            </a>
          </strong>
        </S.DataHeader>
        <S.DataMain>
          <p>{userData?.bio || 'Loading...'}</p>
        </S.DataMain>
        <S.DataFooter>
          <span>
            <Github size={18} /> {userData?.login || 'Loading...'}
          </span>
          <span>
            <Building size={18} /> {userData?.company || 'Loading...'}
          </span>
          <span>
            <UserGroup size={18} /> {userData?.followers || 0} seguidores
          </span>
        </S.DataFooter>
      </S.Data>
    </S.Container>
  )
}
