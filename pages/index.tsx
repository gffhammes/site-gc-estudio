import { Box } from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AboutSection } from '../src/components/AboutSection/AboutSection';
import { Header } from '../src/components/common/Header';
import {
	HeroSection,
	IHeroData,
} from '../src/components/HeroSection/HeroSection';
import { ServicesSection } from '../src/components/ServicesSection/ServicesSection';

interface IHomeProps {
	pageTitle: string;
	pageDescription: string;
	heroData: IHeroData;
}

const Home: NextPage<IHomeProps> = ({
	pageTitle,
	pageDescription,
	heroData,
}) => {
	return (
		<Box sx={{ height: '100%', width: '100%' }}>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
			</Head>

			<Header />

			<Box component="main" sx={{ height: '100%', width: '100%' }}>
				<HeroSection heroData={heroData} />
				<AboutSection />
				<ServicesSection />
			</Box>
		</Box>
	);
};

export const getServerSideProps = async () => {
	const pageTitle = 'GC Estúdio';
	const pageDescription = 'Lorem ipsum';

	const fetchedData = await axios
		.get('https://gc-estudio.herokuapp.com/api/hero', {
			params: {
				populate: '*',
			},
		})
		.then((res) => res.data.data.attributes);

	const heroData: IHeroData = {
		h1: fetchedData.h1,
		backgroundImageUrl: fetchedData.imagemFundo.data.attributes.url,
		buttonText: fetchedData.textoBotao,
	};

	const props = {
		pageTitle,
		pageDescription,
		heroData,
	};

	return {
		props,
	};
};

export default Home;
