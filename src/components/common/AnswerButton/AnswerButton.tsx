import React, { useEffect, useState } from 'react';
import { StyledBox, StyledTexButton } from './StyledButton';

interface CustomButtonProps {
	onClick: () => void;
	isAnswered: boolean;
}

export function CustomButton({ onClick, isAnswered }: CustomButtonProps) {
	const [buttonStyle, setButtonStyle] = useState({
		background: '',
		color: '',
	});

	useEffect(() => {
		setButtonStyle({
			background: isAnswered ? '#DFE5F1' : 'linear-gradient(90deg, #502DB3 0%, #5D2EE3 100%)',
			color: isAnswered ? '#7D8DA6' : '#FFFFFF',
		});
	}, [isAnswered]);

	return (
		<StyledBox
			sx={{ background: buttonStyle.background }}
			onClick={onClick}>
			<StyledTexButton sx={{ color: buttonStyle.color }}>Responder</StyledTexButton>
		</StyledBox>
	);
}
