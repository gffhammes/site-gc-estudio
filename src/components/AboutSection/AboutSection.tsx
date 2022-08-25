import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { useFetch } from '../../hooks/useFetch';
import { IMainTextProps, MainText } from './MainText';
import { Photo } from './Photo';
import { TextWithIcon } from './TextWithIcon';

export const AboutSection = () => {
	const { data, fetching } = useFetch<any>('/sobre', {
		params: {
			populate: ['imagem', 'textoComIcone', 'textoComIcone.icone'],
		},
	});

	console.log(data);

	return (
		<Box sx={{ py: defaultSectionPadding }}>
			<Container>
				<Box>
					<MainText title={data?.h2} text={data?.textoPrincipal} />
					{data?.textoComIcone.map((item: any) => {
						return (
							<TextWithIcon
								key={item.id}
								data={{
									icon: item.icone.data.attributes.url,
									title: item.titulo,
									text: item.texto,
								}}
							/>
						);
					})}
					<Photo image={data?.imagem.data.attributes.url} />
				</Box>
			</Container>
		</Box>
	);
};
