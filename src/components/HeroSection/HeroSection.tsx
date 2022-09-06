import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../common/Button';

export interface IHeroData {
	h1: string;
	backgroundImageUrl: string;
	buttonText: string;
}

interface IHeroSectionProps {
	heroData: IHeroData;
}

const sxOverlay = {
	height: '100%',
	width: '100%',
	top: 0,
	left: 0,
	backgroundColor: 'primary.main',
	position: 'absolute',
	zIndex: 100,
	mixBlendMode: 'color',
};

export const HeroSection = ({
	heroData: { h1, backgroundImageUrl, buttonText },
}: IHeroSectionProps) => {
	const h1Array = h1.split('\n');

	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				backgroundImage: `url(${backgroundImageUrl})`,
				backgroundSize: 'cover',
			}}
			id="hero"
		>
			<Box sx={sxOverlay} />
			<Container
				sx={{
					display: 'flex',
					height: '100%',
					width: '100%',
					position: 'relative',
					zIndex: 500,
					justifyContent: 'flex-end',
				}}
			>
				<Stack alignItems="center" sx={{ width: '100%' }}>
					<Stack
						sx={{
							margin: 'auto 0 auto auto',
							color: 'white.main',
						}}
						alignItems="flex-end"
					>
						<Typography variant="h1">{h1Array[0]}</Typography>
						<Typography variant="h1">{h1Array[1]}</Typography>
						<Typography variant="h1">{h1Array[2]}</Typography>
					</Stack>
					<Button color="secondary" variant="contained">
						{' '}
						{buttonText}
					</Button>
				</Stack>
			</Container>
		</Box>
	);
};
