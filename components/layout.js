import Image from 'next/image'
import Meta from './meta'
import Nav from './nav'
import styles from '../styles/layout.module.css'

export default function Layout({ children, home }) {
  return (
    <>
        <Meta />
        <Nav />
        <div className={styles.container}>
            <main>
                {children}
            </main>
        </div>
    </>
  )
}
