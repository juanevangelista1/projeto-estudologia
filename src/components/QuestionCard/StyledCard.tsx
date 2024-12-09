import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const CardContainer = styled(Box)(() => ({
	maxWidth: '970px',
	width: '100%',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gap: '30px',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
	maxWidth: '300px',
	width: '100%',
	maxHeight: '250px',
	border: '1px solid #DFE5F1',
	borderRadius: '30px',
	transition: 'transform 0.2s ease-in-out',

	'&:hover': {
		boxShadow: theme.shadows[6],
	},

	'.image__container': {
		margin: '0 0 20px 0',
	},
}));

export const StyledCardContent = styled(CardContent)(() => ({
	padding: '30px',
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
