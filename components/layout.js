import Meta from '../components/Meta'
import Nav from '../components/Nav'
import styles from '../styles/layout.module.css'

function Layout({ children, home }) {
  return (
        <>
            <Meta />
            <Nav />
            <main className={styles.main}>{children}</main>
        </>
  )
}

export default Layout
