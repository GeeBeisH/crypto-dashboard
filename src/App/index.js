import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
	color: green;
	${(props) => props.primary && css`color: palevioletred;`};
`;

const TomatoButton = styled(MyButton)`
color: tomato;
border-color: tomato;
`;

function App() {
	return (
		<div className="App">
			<WelcomeMessage />
			<MyButton>Hello</MyButton>
			<MyButton primary>Hello</MyButton>
			<TomatoButton>Hello</TomatoButton>
		</div>
	);
}

export default App;
