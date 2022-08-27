import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
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
		<Box sx={{ backgroundColor: 'primary.main', padding: '2rem' }}>
			<Stack spacing={2} alignItems="center">
				<Box
					sx={{ position: 'relative', height: '55px', width: '55px' }}
				>
					<Image src={icon} alt={title} layout="fill" />
				</Box>
				<Typography variant="h6" color="white" textAlign="center">
					{title}
				</Typography>
				<Typography
					fontWeight={300}
					color="rgba(255,255,255,.4)"
					textAlign="center"
				>
					{text}
				</Typography>
			</Stack>
		</Box>
	);
};
