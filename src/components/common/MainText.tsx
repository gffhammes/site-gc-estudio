import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IMainTextProps {
	title: string;
	text?: string;
}

const sxDash = {
	height: '.4rem',
	width: '3rem',
	backgroundColor: 'secondary.main',
	mb: 2,
};

export const MainText = ({ title, text }: IMainTextProps) => {
	return (
		<Box>
			<Box sx={sxDash} />
			<Typography
				gutterBottom
				variant="h2"
				fontSize={52}
				fontWeight={600}
				color="primary"
			>
				{title}
			</Typography>
			{text && (
				<Typography color="rgb(37 52 93 / 60%)">{text}</Typography>
			)}
		</Box>
	);
};
