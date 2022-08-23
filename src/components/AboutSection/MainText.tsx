import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IMainTextProps {
	title: string;
	text: string;
}

export const MainText = ({ title, text }: IMainTextProps) => {
	return (
		<Box>
			<Typography>{title}</Typography>
			<Typography>{text}</Typography>
		</Box>
	);
};
