import { images } from '../../constants/index'

import styles from './Styles.module.css'

export const RightBanner = () => {
    return(
        <div className={styles.spaceright}>
            <img className={styles.spacerightres} src={images.adsres} alt="res_banner" />
            <img className={styles.banner} src={images.add2} alt="right_banner" />
        </div>
    )
}