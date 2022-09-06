import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MuiThemeProvider } from '../src/MuiThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MuiThemeProvider>
			<Component {...pageProps} />
		</MuiThemeProvider>
	);
}

export default MyApp;
