import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	gap: '32px',
	alignItems: 'center',
	justifyContent: 'flex-start',
	paddingBottom: '8px',
}));

export const StyledTexButton = styled(Button)(() => ({
	textTransform: 'none',
	fontWeight: 'bold',
	fontSize: '16px',
	color: '#DFE5F1',
	backgroundColor: 'transparent',
	borderRadius: 0,
	padding: 0,
	'&.selected': {
		color: '#502DB3',
		position: 'relative',
		'&:after': {
			content: '""',
			position: 'absolute',
			bottom: '-2px',
			left: 0,
			right: 0,
			height: '1px',
			borderRadius: '50%',
			backgroundColor: '#502DB3',
		},
	},
}));
