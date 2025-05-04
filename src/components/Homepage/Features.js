const FeatureList = [
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
        docs into the <code>docs</code> directory.
      </>
    )
  },
]

function Feature({ Svg, title, description }) {
  return (<></>);
  /*
    <div>
      <div className='text--center'>
        <Svg className='mx-auto h-52 w-52' role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <p className='mb-2 text-xl font-bold'>{title}</p>
        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
  */
}

export default function HomepageFeatures() {
  return (<></>);
  /*
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
  */
}
