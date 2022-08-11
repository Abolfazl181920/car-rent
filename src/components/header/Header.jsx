import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'

import styles from './Styles.module.css'

export const Header = () => {
    return(
        <header className={styles.flexiable}>
            <LeftSide />
            <RightSide />
        </header>
    )
}