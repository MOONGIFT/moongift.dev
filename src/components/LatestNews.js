import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../components/ui/button'
import BlogPostItem from '@theme/BlogPostItems/item'
import Translate from '@docusaurus/Translate'
export default function LatestNews({ homePageBlogMetadata, recentPosts }) {
  return (
    <div className='mx-auto my-16 max-w-7xl px-4'>
      <div className='mb-16 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>
          <Translate id='homepage.latestNews.newServices'>
            New Services
          </Translate>
        </h2>
        <p>
          <Translate id='homepage.latestNews.newServicesDescription'>
            {homePageBlogMetadata.blogDescription}
          </Translate>
        </p>
      </div>

      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {recentPosts.map((recentPost, index) => (
          <div key={index} className='flex'>
            <BlogPostItem blog={{ content: recentPost.blogData }} />
          </div>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <Button asChild>
          <Link to={homePageBlogMetadata.path} className='hover:text-primary-foreground'>
            See all
          </Link>
        </Button>
      </div>
    </div>
  )
}
