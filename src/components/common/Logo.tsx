import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';

const sxLogoWrapper: SxProps<Theme> = {
	position: 'relative',
	height: '3.5rem',
	width: '5.3rem',
};

export const Logo = () => {
	return (
		<Box sx={sxLogoWrapper}>
			<Image src={'/images/logo.svg'} alt="logo" layout="fill" />
		</Box>
	);
};
