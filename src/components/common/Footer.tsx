import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';

export const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'primary.main',
				padding: defaultSectionPadding,
			}}
		>
			<Container></Container>
		</Box>
	);
};
