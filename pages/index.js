import utilStyles from '../styles/utils.module.css'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

function Home() {
  return (
    <Layout home>
          <section>
            <h1 className={utilStyles.headingS}>Design-burea fra Odense</h1>
            <p className={utilStyles.headingL}>
                Vi er et lille design bureau med kontor på Odense havn. Nystartede og etablerede virksomheder finder deres visuelle identitet gennem vores skræddersyede forløb, og betror os med udvikling af deres sociale medier og netbutikker.
            </p>
          </section>
    </Layout>
  )
}

export default Home
