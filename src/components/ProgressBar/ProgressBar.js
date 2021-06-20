/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizeData = {
	'small': {
		'height': '8px'
	},
	'medium': {
		'height': '12px'
	},
	'large': {
		'height': '24px'
	}
}

const ProgressBar = ({ value, size }) => {
	const styles = sizeData[size];
	return <Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" value={value} size={size} max={100} style={styles}>
		<VisuallyHidden>{value}</VisuallyHidden>
		<Bar value={value} />
	</Wrapper>;
};

const Wrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	border-radius: 4px;
	border-radius: ${p => p.size ==='large' && '8px'};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	padding: ${p => p.size ==='large' && '4px'};
	overflow: hidden;
`
const Bar = styled.span`
	display: block;
	height: 100%;
	width: ${props => props.value}%;
	background-color: ${COLORS.primary};
	border-radius: 4px 0px 0px 4px;
`


export default ProgressBar;
