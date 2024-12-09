import { styled } from '@mui/material/styles';
import { Box, TextareaAutosize, Typography } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '8px',
	width: '100%',
	maxWidth: '750px',
}));

export const StyledTextareaContainer = styled(Box)(() => ({
	position: 'relative',
	width: '100%',
}));

export const StyledTextarea = styled(TextareaAutosize)(() => ({
	width: '100%',
	maxWidth: '710px',
	minHeight: '195px',
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

export const StyledCharacterCount = styled(Typography)(() => ({
	position: 'absolute',
	top: '20px',
	right: '55px',
	fontSize: '12px',
	color: '#9E9E9E',
}));
