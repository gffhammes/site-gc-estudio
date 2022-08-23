import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import { ILogoProps, Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Header = () => {
	return (
		<Box component="header" sx={{ position: 'fixed', width: '100%' }}>
			<Container sx={{ py: 4 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					{/* <Logo logo={logo} /> */}
					<NavLinks />
				</Stack>
			</Container>
		</Box>
	);
};
