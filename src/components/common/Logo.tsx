import { Box, SxProps, Theme } from '@mui/material';
import Image from 'next/image';

export interface ILogoProps {
	logo: string;
}

const sxLogoWrapper: SxProps<Theme> = {
	position: 'relative',
	height: '3.5rem',
	width: '5.3rem',
};

export const Logo = ({ logo }: ILogoProps) => {
	return (
		<Box sx={sxLogoWrapper}>
			<Image src={logo} alt="logo" layout="fill" />
		</Box>
	);
};
