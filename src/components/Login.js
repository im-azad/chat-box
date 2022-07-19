import { GoogleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle } = useAuth();
	return (
		<div id='login-page'>
			{/*Card component from ANt design */}
			<Card
				bordered={false}
				style={{
					width: 500,
				}}
				id='login-card'
			>
				<h2>Welcome to ChatBox</h2>
				<div
					className='login-button google'
					onClick={signInUsingGoogle}
				>
					<GoogleOutlined /> Sign In with Google
				</div>
			</Card>
		</div>
	);
};

export default Login;
