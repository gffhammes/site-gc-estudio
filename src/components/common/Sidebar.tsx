import {
	Box,
	Container,
	Divider,
	Drawer,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { navLinks } from '../../constants/navLinks';
import { scrollTo } from '../../helpers/scrollTo';

export const Sidebar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={handleOpen} color="white">
				<MenuIcon />
			</IconButton>

			<Drawer
				anchor="top"
				open={open}
				onClose={handleClose}
				sx={{ '& .MuiPaper-root': { backgroundColor: 'primary.main' } }}
			>
				<Box sx={{ width: '100%' }}>
					<Container sx={{ py: 3 }}>
						<Stack spacing={4}>
							<IconButton
								color="white"
								onClick={handleClose}
								sx={{ ml: 'auto' }}
							>
								<CloseIcon />
							</IconButton>
							<Stack spacing={3} divider={<Divider />}>
								{navLinks.map((navLink) => {
									return (
										<Box
											key={navLink.title}
											onClick={() => {
												scrollTo(navLink.anchor);
												handleClose();
											}}
											sx={{ cursor: 'pointer' }}
										>
											<Typography
												sx={{ color: 'white.main' }}
											>
												{navLink.title}
											</Typography>
										</Box>
									);
								})}
							</Stack>
						</Stack>
					</Container>
				</Box>
			</Drawer>
		</>
	);
};
