import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { navLinks } from '../../constants/navLinks';

export const NavLinks = () => {
	return (
		<Stack component="nav" direction="row" spacing={4}>
			{navLinks.map((navLink) => {
				return (
					<Link key={navLink.title} href={navLink.anchor} passHref>
						<a>
							<Typography sx={{ color: 'white' }}>
								{navLink.title}
							</Typography>
						</a>
					</Link>
				);
			})}
		</Stack>
	);
};
