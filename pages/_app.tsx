import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: { main: '#25345D' },
		secondary: { main: '#ED2F3C' },
	},
	typography: {
		h1: {
			fontSize: 45,
			fontWeight: 600,
			'@media (min-width: 600px)': {
				fontSize: 80,
			},
			'@media (min-width: 900px)': {
				fontSize: 110,
			},
			'@media (min-width: 1200px)': {
				fontSize: 150,
			},
		},
	},
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
