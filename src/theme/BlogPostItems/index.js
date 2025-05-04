import React from 'react'

import BlogPostItem from './item'
export default function BlogPostItems({ items, component: BlogPostItemComponent = BlogPostItem }) {
  return (
    <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
      {items.map((blog) => (
        <BlogPostItem key={blog.content.metadata.permalink} blog={blog} />
      ))}
    </div>
  )
}
