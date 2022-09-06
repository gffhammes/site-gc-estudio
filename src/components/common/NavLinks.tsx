import { Box, IconButton, Stack, Typography } from '@mui/material';
import { navLinks } from '../../constants/navLinks';
import { scrollTo } from '../../helpers/scrollTo';
import { useBreakpoints } from '../../hooks';
import { Sidebar } from './Sidebar';

export const NavLinks = () => {
	const { md } = useBreakpoints();

	return (
		<>
			{md ? (
				<Stack component="nav" direction="row" spacing={4}>
					{navLinks.map((navLink) => {
						return (
							<Box
								key={navLink.title}
								onClick={() => scrollTo(navLink.anchor)}
								sx={{ cursor: 'pointer' }}
							>
								<Typography color="white">
									{navLink.title}
								</Typography>
							</Box>
						);
					})}
				</Stack>
			) : (
				<Sidebar />
			)}
		</>
	);
};
