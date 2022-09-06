import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { Button } from './Button';
import { Logo } from './Logo';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: 'primary.main',
				py: defaultSectionPadding,
			}}
		>
			<Container>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent="space-between"
					spacing={8}
					sx={{ color: 'white.main' }}
				>
					<Logo />
					<Stack spacing={3}>
						<Typography fontSize={20} fontWeight={600}>
							Entre em contato
						</Typography>

						<Stack spacing={2}>
							<Stack
								alignItems="center"
								direction="row"
								spacing={1}
								sx={{ color: 'rgba(255,255,255,.4)' }}
							>
								<PhoneEnabledOutlinedIcon />
								<Typography>+55 (47) 99747-6478</Typography>
							</Stack>

							<Stack
								alignItems="center"
								direction="row"
								spacing={1}
								sx={{ color: 'rgba(255,255,255,.4)' }}
							>
								<MailOutlineIcon />
								<Typography>
									contato@gcestudio.com.br
								</Typography>
							</Stack>
						</Stack>
					</Stack>
					<Stack spacing={3}>
						<Typography fontSize={20} fontWeight={600}>
							Quer evoluir sua marca?{' '}
						</Typography>
						<Button color="secondary" variant="contained">
							Iniciar um projeto
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};
