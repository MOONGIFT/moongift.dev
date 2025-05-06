import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItem from '@theme/BlogPostItems/item';
export default function CompanyPage({ services }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Company: {services[0]?.company}</h1>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        {services.map((service, index) => (
          <div key={index} className='flex'>
            <BlogPostItem blog={{ content: service }} />
          </div>
        ))}
      </div>
    </div>
  );
}
