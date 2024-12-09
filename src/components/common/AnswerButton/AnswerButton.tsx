import React, { useState, useEffect } from 'react';
import { StyledBox, StyledTexButton } from './StyledButton';

interface CustomButtonProps {
	onClick: () => void;
	isAnswered: boolean; // Indica se a pergunta já foi respondida
}

export function CustomButton({ onClick, isAnswered }: CustomButtonProps) {
	const [buttonStyle, setButtonStyle] = useState({
		background: '',
		color: '',
	});

	useEffect(() => {
		// Atualiza o estilo do botão com base no estado da resposta
		setButtonStyle({
			background: isAnswered ? '#DFE5F1' : 'linear-gradient(90deg, #502DB3 0%, #5D2EE3 100%)',
			color: isAnswered ? '#7D8DA6' : '#FFFFFF',
		});
	}, [isAnswered]);

	const handleClick = () => {
		if (!isAnswered) {
			onClick();
		}
	};

	return (
		<StyledBox
			sx={{ background: buttonStyle.background }}
			onClick={handleClick}
			disabled={isAnswered}>
			<StyledTexButton sx={{ color: buttonStyle.color }}>Responder</StyledTexButton>
		</StyledBox>
	);
}
