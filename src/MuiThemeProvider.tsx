import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
	interface Palette {
		white: { main: string };
	}
	interface PaletteOptions {
		white: { main: string };
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		white: true;
	}
}

declare module '@mui/material/IconButton' {
	interface IconButtonPropsColorOverrides {
		white: true;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsColorOverrides {
		white: true;
	}
}

const theme = createTheme({
	palette: {
		primary: { main: '#25345D' },
		secondary: { main: '#ED2F3C' },
		white: { main: '#fff' },
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
				fontSize: 140,
			},
		},
	},
});

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
