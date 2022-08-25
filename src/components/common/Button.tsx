import { Button as MuiButton, ButtonProps, styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface IButtonProps extends ButtonProps {
	children: ReactNode;
}

const StyledButton = styled(MuiButton, {
	// shouldForwardProp: (prop) => prop !== 'color',
})(({ color }) => ({
	width: 'fit-content',
	m: 'auto',
	fontWeight: 'bold',
	textTransform: 'none',
}));

export const Button = ({ children, ...props }: IButtonProps) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
