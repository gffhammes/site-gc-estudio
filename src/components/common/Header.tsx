import { Box, Container, Stack, useScrollTrigger } from '@mui/material';
import React from 'react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const Header = () => {
	const scroll = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

	return (
		<Box
			component="header"
			sx={{
				position: 'fixed',
				width: '100%',
				zIndex: 9999,
				transition: 'ease all .3s',
				backgroundColor: scroll ? 'primary.main' : 'transparent',
				boxShadow: scroll ? 5 : 0,
			}}
		>
			<Container sx={{ py: 3 }}>
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
