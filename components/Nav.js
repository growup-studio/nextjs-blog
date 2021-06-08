import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from "react";
import navStyles from '../styles/nav.module.scss'
import menuStyles from '../styles/menu.module.scss'

const altDescription = 'Growup Studio logo, made with Helvetica'

const Nav = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <nav className={navStyles.nav}>
                <div className={navStyles.logoWrapper}>
                    <Link href='/'>
                        <a>
                            <img
                                priority='true'
                                src="/images/Growup_logo_white.svg"
                                className={navStyles.logoContent}
                                height={120}
                                width={453}
                                alt={altDescription}
                            />
                        </a>
                    </Link>
                </div>
                <div className={`${menuStyles.menuButtonWrapper} ${isActive ? menuStyles.menuClosed : menuStyles.menuOpened}`}>
                    <button className={menuStyles.menuButton} id="menuButton" aria-label="Open and close menu" onClick={handleToggle}>
                        <img className={menuStyles.iconMagnifyingGlass} src="/images/magnifying_glass.svg" height={15} width={15} />
                        <span className={menuStyles.menuIconLine}></span>
                        <span className={menuStyles.menuIconLine}></span>
                        <img className={menuStyles.iconCross} src="/images/cross.svg" height={15} width={15} />
                    </button>
                </div>
            </nav>
            <div className={`${menuStyles.menuBody} ${isActive ? menuStyles.menuClosed : menuStyles.menuOpened}`}>
                <ul className={menuStyles.menuList}>
                    <li className={menuStyles.listItem}>
                        <Link href="/cases"><a>Cases</a></Link>
                    </li>
                    <li className={menuStyles.listItem}>
                        <Link href="#"><a>Ydelser</a></Link>
                    </li>
                    <li className={menuStyles.listItem}>
                        <Link href="#"><a>Noter</a></Link>
                    </li>
                    <li className={menuStyles.listItem}>
                        <Link href="/om-os"><a>Om os</a></Link>
                    </li>
                </ul>
                <div className={menuStyles.contactWrapper}>
                    <span className={menuStyles.contactHeader}>Klar til at gro?</span>
                    <Link href="mailto:hello@growupstudio.dk"><a className={menuStyles.contactLink}>hello@growupstudio.dk</a></Link>
                    <Link href="tel:+4530703048"><a className={menuStyles.contactLink}>+45 30 70 30 48</a></Link>
                    <span className={menuStyles.contactSpacer}>/</span>
                    <Link href="tel:+4531623733"><a className={menuStyles.contactLink}>+45 31 62 37 33</a></Link>
                </div>
            </div>
        </>
    )
}

export default Nav
