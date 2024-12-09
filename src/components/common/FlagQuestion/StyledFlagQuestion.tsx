import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
	maxHeight: '17px',
	maxWidth: ' 100px',
}));

export const StyledText = styled(Typography)(() => ({
	fontSize: 10,
	fontFamily: 'var(--font-chivo), sans-serif',
}));
