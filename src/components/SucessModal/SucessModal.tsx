import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ButtonClose, ContainerBox, MinuteText, TextSucess, TitleSucess } from './styles';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

export function SucessModal() {
	const router = useRouter();
	const [totalTime, setTotalTime] = useState(0);

	useEffect(() => {
		let totalSeconds = 0;
		Object.keys(localStorage).forEach((key) => {
			if (key.startsWith('timer-')) {
				const timeSpent = parseInt(localStorage.getItem(key) || '0', 10);
				totalSeconds += 1500 - timeSpent;
			}
		});
		setTotalTime(totalSeconds);
	}, []);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		return `${minutes}m `;
	};

	return (
		<ContainerBox>
			<Box sx={{ margin: '0 0 30px 0' }}>
				<Image
					src='/Image/sucess-image.png'
					alt='Imagem com um troféu'
					width={153}
					height={153}
				/>
			</Box>
			<Box>
				<Box>
					<TitleSucess>Agradecemos sua participação!</TitleSucess>
				</Box>
				<Box>
					<TextSucess>Respostas enviadas com sucesso</TextSucess>
				</Box>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '30px 0' }}>
				<Image
					src='/Icons/clock-icon.svg'
					alt='Clock Icon'
					width={24}
					height={24}
				/>
				<MinuteText
					variant='h6'
					sx={{ fontWeight: '400' }}>
					{formatTime(totalTime)} de prova
				</MinuteText>
			</Box>
			<Box>
				<ButtonClose onClick={() => router.push('/?selectedTab=answers')}>
					<span className='button__text'>Valeu!</span>
				</ButtonClose>
			</Box>
		</ContainerBox>
	);
}
