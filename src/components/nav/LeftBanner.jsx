import { images } from '../../constants/index'

import styles from './Styles.module.css'

export const LeftBanner = () => {
    return(
        <div className={styles.spaceleft}>
            <img className={styles.banner} src={images.add1} alt="left_banner" />
        </div>
    )
}