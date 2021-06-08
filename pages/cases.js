import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

function Cases() {
  return (
    <Layout home>
          <section className={utilStyles.headingMd}>
            <h1>Hello, I'm Rasmus. This is the cases page</h1>
          </section>
    </Layout>
  )
}

export default Cases
