import { useState } from 'react'

import { images } from '../../constants'

import { OpenFullMenu } from './OpenFullMenu'
import styles from './Styles.module.css'

export const RightSide = () => {

    const [ openMenu, setOpenMenu ] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
        alert(openMenu)
    }

    return(
        <div>
            <div className={styles.rightposition}>
                <img className={styles.elrotate} src={images.icon10} alt="bing" />
                <img className={styles.elrotate} src={images.icon7} alt="heart" />
                <img className={styles.elrotate} src={images.icon12} alt="setting" />
                <img onClick={handleOpenMenu} className={styles.profi} src={images.logo7} alt="profile" />
            </div>
        </div>
    )
}