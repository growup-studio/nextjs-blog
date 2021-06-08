import Link from 'next/link'
import Image from 'next/image'
import Menu from '../components/Menu'
import navStyles from '../styles/nav.module.css'

const altDescription = 'Growup Studio logo, made with Helvetica'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logoWrapper}>
                <Link href='/'>
                        <img
                            priority='true'
                            src="/images/Growup_logo_white.svg"
                            className={navStyles.logoContent}
                            height={120}
                            width={453}
                            alt={altDescription}
                        />
                </Link>
            </div>
            <Menu />
        </nav>
    )
}

export default Nav
