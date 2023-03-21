import { PostInfo } from './PostInfo'
import { PostConteiner, PostContent } from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Post() {
  return (
    <PostConteiner>
      <PostInfo />
      <PostContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </ReactMarkdown>
        </div>
      </PostContent>
    </PostConteiner>
  )
}
