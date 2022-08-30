import {
	BaseTextFieldProps,
	styled,
	TextField,
	TextFieldProps,
} from '@mui/material';
import React from 'react';

interface IInputProps extends BaseTextFieldProps {}

const StyledInput = styled(TextField)(({ theme }) => ({
	'& .MuiFormLabel-root': {
		color: theme.palette.primary.main,
	},
	'& .MuiInputBase-root': {
		borderRadius: 0,

		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: theme.palette.primary.main,

			'& :hover': {
				borderColor: theme.palette.primary.main,
			},
		},
	},
}));

export const Input = ({ ...props }: IInputProps) => {
	return <StyledInput color="primary" {...props} />;
};
