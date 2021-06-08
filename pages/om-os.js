import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

function About() {
  return (
    <Layout home>
          <section className={utilStyles.headingMd}>
            <h1>This is about me</h1>
          </section>
    </Layout>
  )
}

export default About
