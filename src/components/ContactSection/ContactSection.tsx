import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';

export const ContactSection = () => {
	const { data, fetching } = useFetch<any>('/contato', {
		// params: {
		// 	populate: ['cards', 'cards.icone'],
		// },
	});
	console.log(data);

	return (
		<Box sx={{ py: defaultSectionPadding }}>
			<Container>
				<MainText title={data?.h2} />
			</Container>
		</Box>
	);
};
