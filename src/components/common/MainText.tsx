import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export interface IMainTextProps {
	title: string;
	text?: string;
	align?: 'center' | 'left';
	dashPosition?: 'top' | 'bottom';
	color?: 'primary' | 'white.main';
	marginBottom?: boolean;
}

export const MainText = ({
	title,
	text,
	align = 'left',
	dashPosition = 'bottom',
	color = 'primary',
	marginBottom = false,
}: IMainTextProps) => {
	const sxDashToUse = {
		height: '.4rem',
		width: dashPosition === 'bottom' ? '6rem' : '3rem',
		backgroundColor:
			color === 'primary' ? 'secondary.main' : 'primary.main',
		my: 1,
	};

	return (
		<Stack alignItems={align} sx={{ marginBottom: marginBottom ? 4 : 0 }}>
			{dashPosition === 'top' && <Box sx={sxDashToUse} />}
			<Typography
				variant="h2"
				fontSize={52}
				fontWeight={600}
				color={color}
			>
				{title}
			</Typography>
			{dashPosition === 'bottom' && <Box sx={sxDashToUse} />}

			{text && (
				<Typography color="rgb(37 52 93 / 60%)">{text}</Typography>
			)}
		</Stack>
	);
};
