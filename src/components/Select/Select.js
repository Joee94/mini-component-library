import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return ( 
	<Wrapper>
		<NativeDropdown value={value} onChange={onChange} >
			{children} 
		</NativeDropdown>
		<ShownDropdown >
			{displayedValue}
			<IconWrapper id={'chevron-down'} width= {'16'}/>
		</ShownDropdown>
	</Wrapper>
  );
};

const IconWrapper = styled(Icon)`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 8px;
`


const Wrapper = styled.div`
	position: relative;
	width: max-content;
`

const NativeDropdown = styled.select`
	position: absolute;
	opacity: 0;
	width: 100%;
	height: 100%;
`

const ShownDropdown = styled.div`
	background-color: ${COLORS.transparentGray15};
	border: none;
	border-radius: 8px;
	padding: 12px 36px 12px 16px; 
	color: ${COLORS.gray700};

	&:hover {
		color: black;
	}
`


export default Select;
