import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerBox = styled(Box)(({ theme }) => ({
	maxWidth: '840px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	margin: '100px auto',
	alignItems: 'center',
	border: '1px solid #DFE5F1',
	borderRadius: '20px',
	padding: '85px',
	boxShadow: theme.shadows[1],
}));

export const ButtonClose = styled(Button)(() => ({
	border: '1px solid #442B8C',
	borderRadius: '36px',
	height: '35px',
	minWidth: '215px',
	width: '100%',

	'.button__text': {
		color: '#442B8C',
		textTransform: 'none',
		fontSize: '14px',
		fontWeight: 'bold',
	},
}));

export const TitleSucess = styled(Typography)(() => ({
	fontSize: '30px',
	fontWeight: 'bold',
	background: 'linear-gradient(90deg, #502DB3 0%, #5D2EE3 100%)',
	WebkitBackgroundClip: 'text', // Define o gradiente como "recorte" do texto
	WebkitTextFillColor: 'transparent', // Torna o fundo do texto transparente
}));

export const TextSucess = styled(Typography)(() => ({
	fontSize: '20px',
	fontWeight: '400',
	color: '#7D8DA6',
	textAlign: 'center',
}));

export const MinuteText = styled(Typography)(() => ({
	fontSize: '14px',
	fontWeight: '400',
	color: '#7D8DA6',
	textAlign: 'center',
}));
