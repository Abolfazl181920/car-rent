import { images } from '../../constants'

export const LeftSide = () => {
    return(
        <div>
            <img src={images.logo5} alt="logo" />
            <img src={images.icon8} alt="search" />
            <input type="text" placeholder="search something here" />
        </div>
    )
}