import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../src/components/common/Header';
import { HeroSection } from '../src/components/HeroSection/HeroSection';

interface IHomeProps {
	pageTitle: string;
	pageDescription: string;
}

const Home: NextPage<IHomeProps> = ({ pageTitle, pageDescription }) => {
	return (
		<Box sx={{ height: '100%', width: '100%' }}>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
			</Head>

			<Header />

			<Box component="main" sx={{ height: '100%', width: '100%' }}>
				<HeroSection />
			</Box>
		</Box>
	);
};

export const getServerSideProps = () => {
	const pageTitle = 'GC Estúdio';
	const pageDescription = 'Lorem ipsum';

	return {
		props: {
			pageTitle,
			pageDescription,
		},
	};
};

export default Home;
