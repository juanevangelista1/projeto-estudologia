import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(() => ({
	background: 'linear-gradient(90deg, #502DB3 0%, #5D2EE3 100%)',
	color: '#FFFFFF',
	borderRadius: '50px',
	padding: '12px 24px',
	fontSize: '16px',
	fontWeight: 'bold',
	textTransform: 'none',
	maxWidth: '265px',
	width: '100%',
	height: '40px',
	'&:hover': {
		background: 'linear-gradient(90deg, #5D2EE3 0%, #502DB3 100%)',
	},
}));
