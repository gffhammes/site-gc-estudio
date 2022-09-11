import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';
import { Section } from '../common/Section';

export const ClientsSection = () => {
	const { data, fetching } = useFetch<any>('/clientes', {
		params: {
			populate: ['clientes', 'clientes.logo'],
		},
	});

	return (
		<Section id="clientes">
			<MainText
				title={data?.h2}
				text={data?.textoPrincipal}
				align="center"
			/>
			<Grid container columns={10}>
				{data?.clientes.map((client: any, index: number) => (
					<Grid key={index} item xs={5} sm={2}>
						<Box>{/* <Image  /> */}</Box>
						<Box>{client.nome}</Box>
					</Grid>
				))}
			</Grid>
		</Section>
	);
};
