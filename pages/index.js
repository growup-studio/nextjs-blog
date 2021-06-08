import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
          <section className={utilStyles.headingMd}>
            <p>Hello, I'm Rasmus. Just trying out Next.js</p>
            <p>
              (This is a sample website - you’ll be building a site like this on{' '}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
    </Layout>
  )
}
