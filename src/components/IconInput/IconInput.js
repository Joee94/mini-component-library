import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
	small: {
		'border-bottom': '1px solid black',
		'height': '24px',
		'padding-left': '24px',
		'iconSize': '16px'
	},
	large: {
		'border-bottom': '2px solid black',
		'height': '36px',
		'padding-left': '36px',
		'iconSize': '24px'
	}
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
	const styles = SIZES[size];
  return( 
  		<Wrapper >
			  <VisuallyHidden>{label}</VisuallyHidden>
			  <IconWrapper id={icon} size={styles.iconSize} />
			  <TextInput type="text" name={label} placeholder={placeholder} style={styles} width={`${width}px`}/>
		</Wrapper>
	);
};

const IconWrapper = styled(Icon)`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	height: ${p=>p.size};
	width: ${p=>p.size};
`

const Wrapper = styled.div`
	position: relative;
`

const TextInput = styled.input`
	border-style: none;
	color: ${COLORS.gray700};
	font-weight: bold;
	width: ${p => p.width};

	&::placeholder {
		font-weight: initial;
		color: ${COLORS.gray500};
	}

	&:focus {
		outline-offset: 3px;
	}

	&:hover {
		color: ${COLORS.black};
	}
`


export default IconInput;
