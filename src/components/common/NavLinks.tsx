import { Box, Stack, Typography } from '@mui/material';
import { navLinks } from '../../constants/navLinks';
import { scrollTo } from '../../helpers/scrollTo';

export const NavLinks = () => {
	return (
		<Stack component="nav" direction="row" spacing={4}>
			{navLinks.map((navLink) => {
				return (
					<Box
						key={navLink.title}
						onClick={() => scrollTo(navLink.anchor)}
						sx={{ cursor: 'pointer' }}
					>
						<Typography sx={{ color: 'white' }}>
							{navLink.title}
						</Typography>
					</Box>
				);
			})}
		</Stack>
	);
};
