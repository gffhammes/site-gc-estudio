import { Box } from '@mui/material';

export const RedCircle = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: 0,
				left: '50%',
				transform: 'translate(-50%, 65%)',
				height: '50rem',
				width: '50rem',
				backgroundColor: 'secondary.main',
				borderRadius: '60rem',
				mixBlendMode: 'color',
				zIndex: 200,
			}}
		/>
	);
};
