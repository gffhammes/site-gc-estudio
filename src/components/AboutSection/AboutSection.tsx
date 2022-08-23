import { Box, Container } from '@mui/material';
import React from 'react';
import { defaultSectionPadding } from '../../constants/defaultSectionPadding';
import { IMainTextProps, MainText } from './MainText';
import { Photo } from './Photo';
import { TextWithIcon } from './TextWithIcon';

export interface IAboutSectionProps extends IMainTextProps {}

export const AboutSection = ({ title, text }: IAboutSectionProps) => {
	return (
		<Box sx={{ py: defaultSectionPadding }}>
			<Container>
				<Box>
					<MainText title={title} text={text} />
					<TextWithIcon />
					<TextWithIcon />
					<Photo />
				</Box>
			</Container>
		</Box>
	);
};
