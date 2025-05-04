import React from 'react'

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer className='bg-gray-100 dark:bg-slate-950/50'>
      <div className='mx-auto max-w-7xl px-4 py-10'>
        {links}
        {(logo || copyright) && (
          <div className='footer__bottom text--center'>
            {logo && <div className='margin-bottom--sm'>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-FF22Y9XQH4"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'G-FF22Y9XQH4');
      </script>
    </footer>
  )
}
