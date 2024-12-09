import { styled } from '@mui/material/styles';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

// Estilizando o contêiner principal do filtro
export const StyledFilterContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	marginBottom: '20px',
}));

// Estilizando o checkbox com label
export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
	color: '#141736', // Cor do texto do label
	fontWeight: 'bold',
	'.MuiTypography-root': {
		fontSize: '14px',
	},
}));

// Estilizando o Checkbox
export const CheckBox = styled(Checkbox)(() => ({
	color: '#DFE5F1', // Cor da borda do checkbox
	'&.Mui-checked': {
		color: '#DFE5F1', // Cor do checkbox quando marcado
	},
	'&:hover': {
		backgroundColor: 'rgba(223, 229, 241, 0.2)', // Cor ao passar o mouse
	},
}));
