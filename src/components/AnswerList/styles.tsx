import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BoxContainer = styled(Box)(() => ({
	maxWidth: '970px',
	margin: '40px auto',
	gap: '24px',
}));

export const StyledContainer = styled(Box)(() => ({
	Width: '100%',
	margin: '40px auto',
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
}));

export const StyledQuestionTitle = styled(Typography)(() => ({
	fontSize: '16px',
	fontWeight: 'bold',
	color: '#000',
	fontFamily: 'var(--font-chivo), sans-serif',
	marginBottom: '20px',
}));

export const StyledAnswerText = styled(Typography)(() => ({
	fontSize: '13px',
	fontWeight: '400',
	color: '#7D8DA6',
	fontFamily: 'var(--font-chivo), sans-serif',
	marginBottom: '20px',
}));

export const StyledSeparator = styled(Box)(() => ({
	height: '1px',
	backgroundColor: '#DFE5F1',
	width: '100%',
	margin: '45px 0 0 0',
}));
