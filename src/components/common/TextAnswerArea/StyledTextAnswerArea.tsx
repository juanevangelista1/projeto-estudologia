import { styled } from '@mui/material/styles';
import { Box, TextareaAutosize, Typography } from '@mui/material';

// Contêiner principal da área de texto
export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	width: '100%',
	maxWidth: '750px',
}));

// Contêiner para a área de texto e contador
export const StyledTextareaContainer = styled(Box)(() => ({
	position: 'relative',
	width: '100%',
}));

// Estilizando a área de texto
export const StyledTextarea = styled(TextareaAutosize)(() => ({
	width: '100%',
	maxWidth: '710px',
	minHeight: '120px',
	border: 'none',
	outline: 'none',
	resize: 'none',
	padding: '16px',
	backgroundColor: '#F5F5F5',
	borderRadius: '8px',
	fontSize: '14px',
	color: '#141736',
	lineHeight: '1.5',
	boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
}));

// Estilizando o contador de caracteres
export const StyledCharacterCount = styled(Typography)(() => ({
	position: 'absolute',
	top: '20px',
	right: '25px',
	fontSize: '12px',
	color: '#9E9E9E',
}));
