import { images } from '../../constants'

import styles from './Styles.module.css'

export const LeftSide = () => {
    return(
        <div>
            <img className={styles.ellogo} src={images.logo5} alt="logo" />
            <input className={styles.searchbar} placeholder="search here" type="text" />
            <img className={styles.sicon} src={images.icon8} />
        </div>
    )
}