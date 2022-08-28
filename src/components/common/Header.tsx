import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Header = () => {
	return (
		<Box
			component="header"
			sx={{
				position: 'fixed',
				width: '100%',
				zIndex: 999,
				backgroundColor: 'primary.main',
			}}
		>
			<Container sx={{ py: 4 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Logo />
					<NavLinks />
				</Stack>
			</Container>
		</Box>
	);
};
