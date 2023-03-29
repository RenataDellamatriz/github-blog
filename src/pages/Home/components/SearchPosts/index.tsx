import i18next from 'i18next'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { api } from '../../../../lib/axios'
import { PostCardWrapper, SearchInputContainer } from '../../styles'
import { LanguageSelect } from '../LanguageSelect'
import { PostCard } from '../PostCard'

export interface Post {
  id: number
  title: string
  comments: string
  created_at: string
  username: string
  url: string
  body: string
  number: number
}

export function SearchPosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language)
  const { t } = useTranslation()

  const translatedPlaceholder = t('input_placeholder')

  function handleLanguageChange(currentLanguage: string) {
    setCurrentLanguage(currentLanguage)
  }

  useEffect(() => {
    i18next.changeLanguage(currentLanguage)
  }, [currentLanguage])

  const fetchPosts = useCallback(
    async (query: string | null) => {
      const response = await api.get(
        `search/issues?q=${query}is:issue%20label:${currentLanguage}%20is:open%20repo:RenataDellamatriz/github-blog`,
      )

      setPosts(response.data.items)
    },
    [currentLanguage],
  )

  useEffect(() => {
    fetchPosts('')
  }, [fetchPosts])

  return (
    <>
      <LanguageSelect
        language={currentLanguage}
        changeLanguage={handleLanguageChange}
      />
      <SearchInputContainer>
        <div>
          <label htmlFor="">{t('posts')}</label>
          <span>
            {posts.length} {t('posts_count')}
          </span>
        </div>
        <input
          type="text"
          placeholder={translatedPlaceholder}
          onKeyDown={(e) => {
            e.key === 'Enter' && fetchPosts(e.currentTarget.value)
          }}
          onBlur={(e) => fetchPosts(e.currentTarget.value)}
        />
      </SearchInputContainer>

      <PostCardWrapper>
        {posts &&
          posts.map((post) => {
            return <PostCard key={`${post.id} - ${post.number}`} post={post} />
          })}
      </PostCardWrapper>
    </>
  )
}
