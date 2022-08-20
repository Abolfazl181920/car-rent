import './App.css'

import { HomePage } from './pages/HomePage'
import { Nav } from './components/nav/Nav'

import { DropDown } from './components/dropdown/DropDown'

const App = () => {
	return (
		<div>
			<HomePage />
			<Nav />
			<DropDown />
		</div>
	)
}

export default App