import { Box } from '@mui/material';
import React from 'react';

export interface IHeroData {
	h1: string;
	backgroundImageUrl: string;
	textoBotao: string;
}

interface IHeroSectionProps {
	heroData: IHeroData;
}

export const HeroSection = ({
	heroData: { h1, backgroundImageUrl, textoBotao },
}: IHeroSectionProps) => {
	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				backgroundImage: `url(${backgroundImageUrl})`,
				backgroundSize: 'cover',
			}}
		></Box>
	);
};
