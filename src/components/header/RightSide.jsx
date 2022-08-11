import { images } from '../../constants'

import styles from './Styles.module.css'

export const RightSide = () => {
    return(
        <div className={styles.rightposition}>
            <img className={styles.elrotate} src={images.icon10} alt="bing" />
            <img className={styles.elrotate} src={images.icon7} alt="heart" />
            <img className={styles.elrotate} src={images.icon12} alt="setting" />
            <img className={styles.elrotate} src={images.logo7} alt="prfile" />
        </div>
    )
}