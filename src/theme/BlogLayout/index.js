import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import Image from '@theme/IdealImage';

export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const { frontMatter } = children.find(child => child.props?.metadata)?.props?.metadata;
  console.log(frontMatter);
  return (
    <Layout {...layoutProps}>
      <div className='container max-w-7xl px-4 py-10'>
        <div className='row'>
          <BlogSidebar sidebar={sidebar} hideOnDesktop />
          <main
            className={clsx('col', {
              'col--12': hasSidebar && !toc,
              'col--9': hasSidebar && toc,
              'col--9 col--offset-1': !hasSidebar
            })}
          >
            {children}
          </main>
          {frontMatter && <div className='col col--3'>
            <Card className='flex w-full flex-col border-0 bg-transparent shadow-none'>
              <CardContent>
                <Image
                  className='block h-auto w-full rounded-lg object-cover'
                  img={require(`/static/img/services/${frontMatter.key}-icon.png`)}
                  alt={frontMatter.title}
                  loading='lazy'
                />
              </CardContent>
              {frontMatter.company && <CardFooter>
                <p className='text-sm dark:text-gray-200 font-bold'>Company: {frontMatter.company}</p>
              </CardFooter>
              }
            </Card>
            {toc && <div>
              {toc}
            </div>
            }
          </div>
          }
        </div>
      </div>
    </Layout>
  );
}
