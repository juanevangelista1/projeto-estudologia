import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledToggleContainer = styled(Box)(() => ({
	maxWidth: '970px',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: '20px',
	margin: '0 auto',
}));

export const StyledToggleItem = styled(Box)<{ selected: boolean }>(({ selected }) => ({
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
	fontSize: '18px',
	color: selected ? '#502DB3' : '#A5B4CB',
	borderBottom: selected ? '1px solid #502DB3' : 'none',
	paddingBottom: selected ? '8px' : '0',
	transition: 'color 0.3s, border-bottom 0.3s, padding-bottom 0.3s',
	gap: '10px',
}));

export const StyledIcon = styled('img')<{ selected: boolean }>(({ selected }) => ({
	filter: selected
		? 'invert(18%) sepia(82%) saturate(2785%) hue-rotate(227deg) brightness(95%) contrast(92%)'
		: 'grayscale(100%) opacity(0.5)',
	transition: 'filter 0.3s',
}));
