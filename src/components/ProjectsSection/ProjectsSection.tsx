import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';

export const ProjectsSection = () => {
	const { data, fetching } = useFetch<any>('/projetos', {
		params: {
			populate: ['cards', 'cards.icone'],
		},
	});

	return (
		<Box sx={{ py: defaultSectionPadding }}>
			<Container>
				<MainText title={data?.h2} text={data?.textoPrincipal} />
			</Container>
		</Box>
	);
};
