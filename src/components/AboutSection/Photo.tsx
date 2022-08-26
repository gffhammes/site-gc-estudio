import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IPhotoProps {
	image: string;
}

export const Photo = ({ image }: IPhotoProps) => {
	return (
		<Box
			sx={{
				height: { xs: 'unset', sm: '550px' },
				width: { xs: '100%', sm: '550px' },
				aspectRatio: ' 1 / 1',
				position: 'relative',
			}}
		>
			<Image
				src={image ?? '/'}
				alt="GC Estúdio"
				layout="fill"
				objectFit="contain"
			/>
		</Box>
	);
};
