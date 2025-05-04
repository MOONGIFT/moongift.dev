import TagsListInline from '@theme/TagsListInline'
import { Card, CardContent, CardFooter } from '../../components/ui/card'
import Link from '@docusaurus/Link'
import Image from '@theme/IdealImage'

export default function BlogPostItem({ blog }) {
  const data = blog.content.metadata.frontMatter;
  return (
    <div className='flex'>
      <Card className='flex w-full flex-col border-0 bg-transparent shadow-none'>
        <div className='grid grid-cols-6'>
          <div className='col-span-1'>
            <Link
              to={blog.content.metadata.permalink}
              className='overflow-hidden transition-opacity hover:opacity-90'
            >
              <Image
                className='block h-auto w-full rounded-lg object-cover'
                img={require(`/static/img/services/${data.key}-icon.png`)}
                alt={blog.content.metadata.title}
                loading='lazy'
              />
            </Link>
          </div>
          <div className='col-span-5'>
            <CardContent className='mt-2 p-4'>
              <Link to={blog.content.metadata.permalink} className='mt-4'>
                <p className='mb-1 p-0 text-xl font-semibold'>{blog.content.metadata.title}</p>
              </Link>
            </CardContent>
          </div>
        </div>
        <CardFooter className='px-2'>
          <div className='grid grid-cols-1'>
            <div className='mb-4 mt-2 line-clamp-2 dark:text-gray-400'>
              {blog.content.metadata.description}
            </div>
          </div>
        </CardFooter>
        <CardFooter className='px-2'>
          <div className='grid grid-cols-1'>
            {blog.content.metadata.tags.length > 0 && (
              <div className='blog-tags flex flex-wrap gap-2'>
                <TagsListInline tags={blog.content.metadata.tags} />
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
