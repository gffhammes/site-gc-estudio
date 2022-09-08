import { Button as MuiButton, ButtonProps, styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface IButtonProps extends ButtonProps {
	children: ReactNode;
}

const StyledButton = styled(MuiButton, {
	// shouldForwardProp: (prop) => prop !== 'color',
})(({ color }) => {
	console.log(color === 'white');
	return {
		width: 'fit-content',
		m: 'auto',
		fontWeight: 'bold',
		textTransform: 'none',
		color: color === 'white' ? '#ED2F3C' : 'white',
	};
});

export const Button = ({ children, ...props }: IButtonProps) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
