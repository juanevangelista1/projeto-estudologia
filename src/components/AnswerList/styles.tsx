import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(() => ({
	maxWidth: '840px',
	margin: '40px auto',
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
}));

export const StyledQuestionTitle = styled(Typography)(() => ({
	fontSize: '18px',
	fontWeight: 'bold',
	color: '#141736',
}));

export const StyledAnswerText = styled(Typography)(() => ({
	fontSize: '16px',
	fontWeight: '400',
	color: '#7D8DA6',
}));

export const StyledSeparator = styled(Box)(() => ({
	height: '1px',
	backgroundColor: '#DFE5F1',
	width: '100%',
}));
