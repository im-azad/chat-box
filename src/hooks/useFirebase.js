import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.initialize';
import { useNavigate } from 'react-router-dom';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

// import and call firebase initialize
initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUser(result.user);
			})
			.catch((error) => {
				setError(error.messages);
			});
	};
	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	const navigate = useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
			console.log(user);
			if (user) {
				navigate('/chats', { replace: true });
			}
		});
	}, []);
	return {
		user,
		error,
		logout,
		signInUsingGoogle,
	};
};
export default useFirebase;
