import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';

export const ClientsSection = () => {
	const { data, fetching } = useFetch<any>('/clientes', {
		// params: {
		// 	populate: ['cards', 'cards.icone'],
		// },
	});

	return (
		<Box sx={{ py: defaultSectionPadding, backgroundColor: '#f4f4f4' }}>
			<Container>
				<MainText title={data?.h2} text={data?.textoPrincipal} />
			</Container>
		</Box>
	);
};
