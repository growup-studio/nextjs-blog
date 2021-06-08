import Meta from './Meta'
import Nav from './Nav'
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
