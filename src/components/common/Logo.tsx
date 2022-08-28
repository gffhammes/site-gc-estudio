import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import { scrollTo } from '../../helpers/scrollTo';

const sxLogoWrapper: SxProps<Theme> = {
	position: 'relative',
	height: '3.5rem',
	width: '5.3rem',
	cursor: 'pointer',
};

export const Logo = () => {
	return (
		<Box sx={sxLogoWrapper} onClick={() => scrollTo('hero')}>
			<Image src={'/images/logo.svg'} alt="logo" layout="fill" />
		</Box>
	);
};
