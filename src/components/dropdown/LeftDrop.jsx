import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


export const LeftDrop = () => {

    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption = options[0];

    const onSelect = () => {}

    return(
        <div>
            <h1>LeftDrop</h1>
            <Dropdown options={options} onChange={onSelect} value={defaultOption} placeholder="Select an option" />;
        </div>
    )
}