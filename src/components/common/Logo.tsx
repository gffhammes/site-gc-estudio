import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';
import { scrollTo } from '../../helpers/scrollTo';

type TSize = 'sm' | 'md' | 'lg';

interface ILogoProps {
	size?: TSize;
}

const getWidth = (size: TSize) => {
	switch (size) {
		case 'sm':
			return '3rem';
		case 'md':
			return '5.3rem';
		case 'lg':
			return '8rem';
		default:
			return '8rem';
	}
};

export const Logo = ({ size = 'md' }: ILogoProps) => {
	const width = getWidth(size);

	return (
		<Box sx={{ ...sxLogoWrapper, width }} onClick={() => scrollTo('hero')}>
			<Image src={'/images/logo.svg'} alt="logo" layout="fill" />
		</Box>
	);
};

const sxLogoWrapper: SxProps<Theme> = {
	position: 'relative',
	cursor: 'pointer',
	aspectRatio: '1 / .66',
	transition: '.3s ease all',
};
