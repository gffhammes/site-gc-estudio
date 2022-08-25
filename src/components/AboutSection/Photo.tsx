import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface IPhotoProps {
	image: string;
}

export const Photo = ({ image }: IPhotoProps) => {
	return (
		<Box sx={{ height: '550px', width: '550px', position: 'relative' }}>
			<Image src={image} alt="GC Estúdio" layout="fill" />
		</Box>
	);
};
