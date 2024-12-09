import { styled } from '@mui/material/styles';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

export const StyledFilterContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	marginBottom: '20px',
}));

export const StyledFormControlLabel = styled(FormControlLabel)(() => ({
	color: '#141736',
	fontWeight: 'bold',
	'.MuiTypography-root': {
		fontSize: '14px',
		fontFamily: 'var(--font-chivo), sans-serif',
	},
}));

export const CheckBox = styled(Checkbox)(() => ({
	color: '#DFE5F1',
	'&.Mui-checked': {
		color: '#DFE5F1',
	},
	'&:hover': {
		backgroundColor: 'rgba(223, 229, 241, 0.2)',
	},
}));
