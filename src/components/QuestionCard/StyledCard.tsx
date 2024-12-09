import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

// Estilizando o Card

// Estilizando o Card
export const StyledCard = styled(Card)(({ theme }) => ({
	minWidth: 300,
	width: '100%',
	minHeight: 240,
	border: '1px solid #DFE5F1',
	padding: '16px',
	borderRadius: 30,
	margin: '16px',
	transition: 'transform 0.2s ease-in-out',

	'&:hover': {
		boxShadow: theme.shadows[6],
	},

	'.image__container': {
		margin: '0 0 20px 0',
	},
}));

// Estilizando o CardContent
export const StyledCardContent = styled(CardContent)(() => ({
	padding: '16px',
	display: 'flex',
	flexDirection: 'column',
}));

export const StyledTextCard = styled(Typography)(() => ({
	fontSize: 12,
	color: '#7D8DA6',
	margin: '20px 0',
	fontWeight: 'bold',
}));

export const StyledTitleCard = styled(Typography)(() => ({
	fontSize: 16,
	color: '#141736',
}));
