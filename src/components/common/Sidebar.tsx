import { Box, Drawer, IconButton, Typography } from '@mui/material';
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

	const toggleOpen = () => {
		setOpen((open) => !open);
	};

	return (
		<>
			<IconButton onClick={toggleOpen} color="white">
				{open ? <CloseIcon /> : <MenuIcon />}
			</IconButton>

			<Drawer
				anchor="top"
				open={open}
				onClose={handleClose}
				sx={{ '& .MuiPaper-root': { backgroundColor: 'primary.main' } }}
			>
				<Box sx={{ height: '20rem', width: '100%', p: 10, pt: 20 }}>
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
								<Typography sx={{ color: 'white' }}>
									{navLink.title}
								</Typography>
							</Box>
						);
					})}
				</Box>
			</Drawer>
		</>
	);
};
