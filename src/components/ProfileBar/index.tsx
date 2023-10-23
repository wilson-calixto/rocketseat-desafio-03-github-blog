/* eslint-disable camelcase */
import { Github } from 'styled-icons/fa-brands'
import {
  Building,
  UserGroup,
  ArrowUpRightFromSquare,
} from 'styled-icons/fa-solid'

import * as S from './styles'
import { useUser } from '../../hooks/useUser'
import { Link } from 'react-router-dom'

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
  const { data, isLoading, error } = useUser('wilson-calixto')
  return (
    <S.Container>
      {error && <p>Error fetching data</p>}
      {isLoading ? (
        <p>Fetching data...</p>
      ) : (
        <>
          <S.Avatar>
            <img
              src={data?.avatar_url}
              alt="Imagem do usuário de github selecionado"
              width="148"
              height="148"
            />
          </S.Avatar>
          <S.Data>
            <S.DataHeader>
              <h1>{data?.name}</h1>
              <strong>
                <Link to={data?.html_url}>
                  Github <ArrowUpRightFromSquare size={18} />
                </Link>
              </strong>
            </S.DataHeader>
            <S.DataMain>
              <p>{data?.bio}</p>
            </S.DataMain>
            <S.DataFooter>
              <span>
                <Github size={18} /> {data?.login}
              </span>
              {data?.company && (
                <span>
                  <Building size={18} /> {data?.company}
                </span>
              )}
              <span>
                <UserGroup size={18} /> {data?.followers} seguidores
              </span>
            </S.DataFooter>
          </S.Data>
        </>
      )}
    </S.Container>
  )
}
