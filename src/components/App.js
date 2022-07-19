import { Routes, Route } from 'react-router-dom';
import '../App.css';
import AuthProvider from '../contexts/AuthProvider';
import Chats from './Chats';
import Login from './Login';

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/chats' element={<Chats />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
