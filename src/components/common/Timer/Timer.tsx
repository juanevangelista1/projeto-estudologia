import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Estilizando o contêiner do Timer
const StyledTimerContainer = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	padding: '8px 16px',
	border: '1px solid #A5B4CB',
	borderRadius: '8px',
	backgroundColor: '#FFFFFF',
	fontSize: '16px',
	fontWeight: 'bold',
	color: '#5A6170',
}));

interface TimerProps {
	questionId: number; // Identificador único para cada questão
}

export function Timer({ questionId }: TimerProps) {
	const initialTime = 1500; // 25 minutos em segundos
	const storageKey = `timer-${questionId}`; // Chave única para cada questão

	const [timeLeft, setTimeLeft] = useState<number>(initialTime);

	useEffect(() => {
		// Recuperar o tempo restante do localStorage ao carregar a página
		const savedTime = localStorage.getItem(storageKey);
		if (savedTime) {
			setTimeLeft(parseInt(savedTime, 10));
		}

		// Configurar o intervalo para decrementar o tempo
		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					clearInterval(interval); // Parar o timer quando chegar a 0
					return 0;
				}
				const newTime = prev - 1;
				localStorage.setItem(storageKey, newTime.toString()); // Salvar o novo tempo no localStorage
				return newTime;
			});
		}, 1000);

		// Limpar o intervalo ao sair da página
		return () => clearInterval(interval);
	}, [storageKey]);

	// Formatar o tempo no formato MM:SS
	const formatTime = (time: number): string => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};

	return (
		<StyledTimerContainer>
			<Image
				src='/Icons/clock-icon.svg'
				alt='Clock Icon'
				width={24}
				height={24}
			/>
			<Typography>{formatTime(timeLeft)}</Typography>
		</StyledTimerContainer>
	);
}
