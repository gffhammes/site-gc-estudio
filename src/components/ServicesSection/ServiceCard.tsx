import { Box, Typography } from '@mui/material';
import React from 'react';

interface IServiceCardProps {
	data: {
		icon: string;
		title: string;
		text: string;
	};
}

export const ServiceCard = ({
	data: { icon, title, text },
}: IServiceCardProps) => {
	return (
		<Box>
			<Box></Box>
			<Typography>{title}</Typography>
			<Typography>{text}</Typography>
		</Box>
	);
};
