import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main'
import Infomatrics from './pages/Infomatrics'
import Error from './pages/Error'
import './styles/App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/infomatrics' element={<Infomatrics />} />
				<Route path="*" element={<Error />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
