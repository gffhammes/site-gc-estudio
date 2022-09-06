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

	return (
		<Section id="contato" backgroundColor="secondary.main">
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				spacing={10}
				alignItems="center"
				justifyContent="space-between"
			>
				<Box
					sx={{
						flexBasis: '50%',
					}}
				>
					<MainText
						title={data?.h2}
						color="white.main"
						dashPosition="top"
						marginBottom
					/>

					<ContactForm />
				</Box>

				<Box
					sx={{
						position: 'relative',
						width: '100%',
						maxWidth: { xs: '27rem', md: 'unset' },
						aspectRatio: '1 / 1',
						flexBasis: '50%',
					}}
				>
					<Image
						src={data?.foto.data.attributes.url || '/'}
						alt="GC Estúdio"
						layout="fill"
					/>
				</Box>
			</Stack>
		</Section>
	);
};
