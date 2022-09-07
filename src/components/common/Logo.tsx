import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import { scrollTo } from '../../helpers/scrollTo';

const sxLogoWrapper: SxProps<Theme> = {
	position: 'relative',
	cursor: 'pointer',
	aspectRatio: '1 / .66',
};

interface ILogoProps {
	size?: 'md' | 'lg';
}

export const Logo = ({ size = 'md' }: ILogoProps) => {
	const width = size === 'md' ? '5.3rem' : '8rem';

	return (
		<Box sx={{ ...sxLogoWrapper, width }} onClick={() => scrollTo('hero')}>
			<Image src={'/images/logo.svg'} alt="logo" layout="fill" />
		</Box>
	);
};
