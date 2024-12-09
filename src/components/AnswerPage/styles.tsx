import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerBox = styled(Box)(() => ({
	maxWidth: '750px',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	margin: '30px auto',
	position: 'relative',

	'.title__div': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '10px',
		marginBottom: '72px',
	},
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
	position: 'absolute',
	top: '90px',
	right: '195px',
}));

export const SectionMiddleWrapper = styled(Box)(() => ({
	gap: '15px',
	margin: '0 0 26px 0',
}));

export const SectionBottomContainer = styled(Box)(() => ({
	borderTop: '1px solid #F3F3F3',
	maxWidth: '750px',
	width: '100%',
	marginBottom: '60px',

	'.button__wrapper': {
		maxWidth: '750px',
		width: '100%',
		margin: '25px 0 0 0',
		position: 'relative',
	},
}));

export const AnswerPageTitle = styled(Typography)(() => ({
	color: '#141736',
	fontSize: '16px',
	fontWeight: 'bold',
	lineHeight: '1',
	margin: '0',
	fontFamily: 'var(--font-chivo), sans-serif',
}));

export const AnswerSubTitle = styled(Typography)(() => ({
	color: '#7D8DA6',
	fontSize: '16px',
	fontWeight: 'bold',
	margin: '0 0 15px 0',
	fontFamily: 'var(--font-chivo), sans-serif',
}));

export const ButtonNext = styled(Button)(() => ({
	border: 'none',
	color: '#7D8DA6',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	textTransform: 'none',
	position: 'absolute',
	right: '0',
}));

export const ButtonPrevious = styled(Button)(() => ({
	border: 'none',
	color: '#7D8DA6',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	textTransform: 'none',
	position: 'absolute',
	left: '0',
}));
