import React from 'react';
import styled, { css } from 'styled-components';

const CoinImage = styled.img`
	height: 50px;
	${(props) =>
		props.spotlight &&
		css`
			display: block;
			margin: auto;
			height: 200px;
		`};
`;

export default function({ coin, spotlight }) {
	return <CoinImage spotlight={spotlight} alt={coin.CoinSymboll} src={`http://cryptocompare.com/${coin.ImageUrl}`} />;
}
