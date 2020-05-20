import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled from 'styled-components';

const PriceGrid = styled.div`display: block;`;

export default function() {
	return (
		<AppContext.Consumer>
			{({ prices }) => <PriceGrid>{prices.map((price) => <div> Prices </div>)}</PriceGrid>}
		</AppContext.Consumer>
	);
}
