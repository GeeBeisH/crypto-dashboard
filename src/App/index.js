import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

function App() {
	return (
		<AppLayout>
			<AppBar />
			<WelcomeMessage />
		</AppLayout>
	);
}

export default App;
