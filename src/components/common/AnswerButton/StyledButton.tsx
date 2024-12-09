import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Button)(() => ({
	minWidth: '240px',
	width: '100%',
	height: '40px',
	borderRadius: '42px',
}));

export const StyledTexButton = styled(Box)(() => ({
	fontSize: 14,
	color: '#FFFFFF',
	textTransform: 'none',
	fontWeight: 'bold',
}));
