import Link from 'next/link'
import Image from 'next/image'
import navStyles from '../styles/nav.module.css'

const altDescription = 'Growup Studio logo, made with Helvetica'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Link href='/' className={navStyles.logoWrapper}>
                    <img
                        priority='true'
                        src="/images/Growup_logo.svg"
                        className={navStyles.logoContent}
                        height={120}
                        width={453}
                        alt={altDescription}
                    />
            </Link>
            <ul className={navStyles.navigation} id="test_id">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
