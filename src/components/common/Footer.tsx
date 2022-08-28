import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { Button } from './Button';
import { Logo } from './Logo';

export const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'primary.main',
				padding: defaultSectionPadding,
			}}
		>
			<Container>
				<Stack>
					<Logo />
					<Box>
						<Typography>Entre em contato</Typography>
						<Typography>+55 (47) 99747-6478</Typography>
						<Typography>contato@gcestudio.com.br</Typography>
					</Box>
					<Box>
						<Typography>Quer evoluir sua marca? </Typography>
						<Button color="secondary" variant="contained">
							Iniciar um projeto
						</Button>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};
