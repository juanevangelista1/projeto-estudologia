import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilos personalizados
export const StyledToggleContainer = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '20px',
	margin: '20px 0',
}));

export const StyledToggleItem = styled(Box)<{ selected: boolean }>(({ selected }) => ({
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
	fontSize: '16px',
	fontWeight: selected ? 'bold' : 'normal',
	color: selected ? '#502DB3' : '#A5B4CB',
	borderBottom: selected ? '2px solid #502DB3' : 'none',
	transition: 'color 0.3s, border-bottom 0.3s',
}));

export const StyledIcon = styled('img')<{ selected: boolean }>(({ selected }) => ({
	width: '16px',
	height: '16px',
	marginRight: '8px',
	filter: selected ? 'none' : 'grayscale(100%) opacity(0.5)', // Ícone mais claro se não estiver selecionado
}));
