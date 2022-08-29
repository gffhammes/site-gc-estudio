import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';
import { Section } from '../common/Section';

export const ContactSection = () => {
	const { data, fetching } = useFetch<any>('/contato', {
		// params: {
		// 	populate: ['cards', 'cards.icone'],
		// },
	});
	console.log(data);

	return (
		<Section id="contato" backgroundColor="secondary.main">
			<MainText title={data?.h2} color="white" dashPosition="top" />
		</Section>
	);
};
