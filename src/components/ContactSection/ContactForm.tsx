import { Stack } from '@mui/material';
import React from 'react';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

export const ContactForm = () => {
	return (
		<Stack spacing={2}>
			<Input label="Nome" />
			<Input label="Telefone" />
			<Input label="Email" />
			<Button variant="contained">Enviar</Button>
		</Stack>
	);
};
