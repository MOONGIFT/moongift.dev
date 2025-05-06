import React from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import BlogPostItem from '@theme/BlogPostItems/item';
import Translate from '@docusaurus/Translate';

export default function CompanyPage({ posts }) {
  const location = useLocation();
  const history = useHistory();
  const pathSegments = location.pathname.split('/');
  const companyName = pathSegments[pathSegments.length - 1];

  // URLが /companies/company の場合は企業一覧にリダイレクト
  if (companyName === 'company') {
    history.push('/companies');
    return null;
  }
  const companyInfo = posts.find(post => post.frontMatter.companyInfo)?.frontMatter.companyInfo || {};
  return (
    <Layout title={`${companyInfo.name || companyName}のサービス一覧`}>
      <div className="container margin-vert--xl">
        <div className='text-2xl font-bold mb-5'>
          <Translate
            id='companies.company'
          >Services by </Translate>
          {
            companyInfo.url ? <a href={companyInfo.url} target='_blank' rel='noopener noreferrer'>{companyInfo.name || companyName}</a>
              : companyInfo.name || companyName
          }
        </div>
        <div className='text-sm text-gray-500 mb-5'>
          {companyInfo.description}
        </div>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((metadata, index) => (
            <div key={index} className='flex'>
              <BlogPostItem blog={{ content: { metadata } }} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 