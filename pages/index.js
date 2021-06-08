import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

function Home() {
  return (
    <Layout home>
          <section className={utilStyles.headingMd}>
            <h1>Hello, I'm Rasmus. Just trying out Next.js</h1>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
    </Layout>
  )
}

export default Home
