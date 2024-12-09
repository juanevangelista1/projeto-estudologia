import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { StyledTimerContainer } from './styles';

interface TimerProps {
	questionId: number;
}

export function Timer({ questionId }: TimerProps) {
	const initialTime = 1500;
	const storageKey = `timer-${questionId}`;

	const [timeLeft, setTimeLeft] = useState<number>(initialTime);

	useEffect(() => {
		const savedTime = localStorage.getItem(storageKey);
		if (savedTime) {
			setTimeLeft(parseInt(savedTime, 10));
		}

		const interval = setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					localStorage.setItem(storageKey, initialTime.toString());
					return initialTime;
				}
				const newTime = prev - 1;
				localStorage.setItem(storageKey, newTime.toString());
				return newTime;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [storageKey, initialTime]);

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
			<Typography sx={{ fontFamily: 'var(--font-chivo), sans-serif' }}>
				{formatTime(timeLeft)}
			</Typography>
		</StyledTimerContainer>
	);
}
