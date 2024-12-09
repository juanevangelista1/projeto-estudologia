import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)(() => ({
	maxHeight: 17,
	maxWidth: 85,
}));

export const StyledText = styled(Typography)(() => ({
	fontSize: 10,
}));
