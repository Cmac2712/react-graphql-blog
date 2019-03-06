import React, { Component } from 'react';
import { StyledSuccessMessage } from './style';
import { Wrapper } from '../App/Theme';

const SuccessMessage = props => {
	return (
		<Wrapper>
			<StyledSuccessMessage>
				Success! Your password has been changed.
			</StyledSuccessMessage>
		</Wrapper>
	)
}

export default SuccessMessage;
