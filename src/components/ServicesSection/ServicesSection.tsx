import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
	const { data, fetching } = useFetch<any>('/servicos', {
		params: {
			populate: ['cards', 'cards.icone'],
		},
	});

	console.log(data);

	return (
		<Box sx={{ py: defaultSectionPadding, backgroundColor: '#f4f4f4' }}>
			<Container>
				<MainText title={data?.h2} text={data?.textoPrincipal} />
				{data?.cards.map((card: any) => {
					return (
						<ServiceCard
							data={{
								icon: 'test',
								title: 'test',
								text: 'test',
							}}
							key={card.id}
						/>
					);
				})}
			</Container>
		</Box>
	);
};
