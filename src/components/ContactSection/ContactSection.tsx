import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { MainText } from '../common/MainText';
import { Section } from '../common/Section';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
	const { data, fetching } = useFetch<any>('/contato', {
		params: {
			populate: ['foto'],
		},
	});
	console.log(data);

	return (
		<Section id="contato" backgroundColor="secondary.main">
			<Stack direction="row" spacing={4} alignItems="center">
				<Box
					sx={{
						flexBasis: '50%',
					}}
				>
					<MainText
						title={data?.h2}
						color="white"
						dashPosition="top"
						marginBottom
					/>

					<ContactForm />
				</Box>

				<Box
					sx={{
						position: 'relative',
						width: '100%',
						aspectRatio: '1 / 1',
						flexBasis: '50%',
					}}
				>
					<Image
						src={data?.foto.data.attributes.url}
						alt="GC Estúdio"
						layout="fill"
					/>
				</Box>
			</Stack>
		</Section>
	);
};
