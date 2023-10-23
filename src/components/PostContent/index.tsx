import { ReactNode } from 'react'

import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

import * as S from './styles'
import { IssueProps } from '../../pages/Post'

interface CodeProps {
  node: ReactNode
  inline: boolean
  className: string
  children: ReactNode
}

export function PostContent({ body }: IssueProps) {
  const Code = ({ node, inline, className, children, ...props }: CodeProps) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/, '')}
        style={dracula}
        language={match[1]}
        PreTag="div"
      />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    )
  }

  return (
    <S.Container remarkPlugins={[remarkGfm]} components={{ code: Code }}>
      {body}
    </S.Container>
  )
}
