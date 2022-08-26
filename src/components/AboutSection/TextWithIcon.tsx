import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface ITextWithIconProps {
	data: {
		icon: string;
		title: string;
		text: string;
	};
}

export const TextWithIcon = ({
	data: { icon, title, text },
}: ITextWithIconProps) => {
	return (
		<Box>
			<Stack
				direction={{ xs: 'column', sm: 'row' }}
				alignItems={{ xs: 'flex-start', sm: 'center' }}
				spacing={4}
			>
				<Box
					sx={{ height: '55px', width: '55px', position: 'relative' }}
				>
					<Image src={icon} alt={title} layout="fill" />
				</Box>
				<Stack spacing={2}>
					<Typography fontSize={23} fontWeight="bold">
						{title}
					</Typography>
					<Typography sx={{ maxWidth: '43ch' }}>{text}</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};
