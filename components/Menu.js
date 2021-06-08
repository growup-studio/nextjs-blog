import React, { useState } from "react";
import menuStyles from '../styles/menu.module.scss'


const MenuIcon = () => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div className={`${menuStyles.menuButtonWrapper} ${isActive ? menuStyles.menuClosed : menuStyles.menuOpened}`}>
                <button className={menuStyles.menuButton} id="menuButton" aria-label="Open and close menu" onClick={handleToggle}>
                    <img className={menuStyles.iconMagnifyingGlass} src="/images/magnifying_glass.svg" height={15} width={15} />
                    <span className={menuStyles.menuIconLine}></span>
                    <span className={menuStyles.menuIconLine}></span>
                    <img className={menuStyles.iconCross} src="/images/cross.svg" height={15} width={15} />
                </button>
            </div>
            <div className={`${menuStyles.menuBody} ${isActive ? menuStyles.menuClosed : menuStyles.menuOpened}`}></div>
        </>
    );
}

export default MenuIcon
