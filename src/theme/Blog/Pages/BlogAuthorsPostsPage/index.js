import React from 'react'
import clsx from 'clsx'
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from '@docusaurus/theme-common'
import {
  useBlogAuthorPageTitle,
  BlogAuthorsListViewAllLabel
} from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import { useBlogMetadata } from '@docusaurus/plugin-content-blog/client'
import BlogLayout from '@theme/BlogLayout'
import BlogListPaginator from '@theme/BlogListPaginator'
import SearchMetadata from '@theme/SearchMetadata'
import BlogPostItems from '@theme/BlogPostItems'
import Author from '@theme/Blog/Components/Author'

function Metadata({ author }) {
  const title = useBlogAuthorPageTitle(author)
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag='blog_authors_posts' />
    </>
  )
}

function ViewAllAuthorsLink() {
  const { authorsListPath } = useBlogMetadata()
  return (
    <Link href={authorsListPath}>
      <BlogAuthorsListViewAllLabel />
    </Link>
  )
}

function Content({ items, sidebar, listMetadata }) {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className='margin-bottom--xl'>
      </header>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  )
}

export default function BlogAuthorsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogAuthorsPostsPage)}
    >
      <Metadata {...props} />
      <Content {...props} />
    </HtmlClassNameProvider>
  )
}
