import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';

interface ISectionProps {
	children: ReactNode;
	id: string;
	backgroundColor?: string;
}

export const Section = ({
	children,
	id,
	backgroundColor = '#fff',
}: ISectionProps) => {
	return (
		<Box
			component="section"
			id={id}
			sx={{ py: defaultSectionPadding, backgroundColor }}
		>
			<Container>{children}</Container>
		</Box>
	);
};
