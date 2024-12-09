import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerBox = styled(Box)(() => ({
	maxWidth: '750px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	margin: '72px auto',
}));

export const SectionTop = styled(Box)(() => ({
	maxWidth: '1440px',
	width: '97%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'end',
	margin: '20px 0 0 0',
}));

export const SectionTopWrapper = styled(Box)(() => ({
	display: 'flex',
	maxWidth: '720px',
	width: '100%',
	alignItems: 'center',
	justifyContent: 'space-between',

	'.title__div': {
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
	},
}));

export const SectionMiddleWrapper = styled(Box)(() => ({
	gap: '15px',
	margin: '0 0 26px 0',
}));

export const SectionBottomContainer = styled(Box)(() => ({
	borderTop: '1px solid #F3F3F3',
	maxWidth: '750px',
	width: '100%',

	'.button__wrapper': {
		maxWidth: '750px',
		width: '100%',
		margin: '25px 0 0 0',
		display: 'flex',
		justifyContent: 'end',
		gap: '80%',
	},
}));

export const AnswerPageTitle = styled(Typography)(() => ({
	color: '#141736',
	fontSize: '16px',
	fontWeight: 'bold',
	lineHeight: '1',
	margin: '0',
}));

export const AnswerSubTitle = styled(Typography)(() => ({
	color: '#7D8DA6',
	fontSize: '16px',
	fontWeight: 'bold',
	margin: '0 0 15px 0',
}));

export const ButtonNext = styled(Button)(() => ({
	border: 'none',
	color: '#7D8DA6',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	textTransform: 'none',
}));

export const ButtonPrevious = styled(Button)(() => ({
	border: 'none',
	color: '#7D8DA6',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	textTransform: 'none',
}));