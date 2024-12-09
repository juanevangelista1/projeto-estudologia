import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { StyledToggleContainer, StyledToggleItem } from './styles';
import Image from 'next/image';

interface AnswerListToggleProps {
	cadernos: { id: string; title: string }[];
	onCadernoChange: (title: string) => void;
}

export function AnswerListToggle({ cadernos, onCadernoChange }: AnswerListToggleProps) {
	const [selectedCaderno, setSelectedCaderno] = useState<string>(cadernos[0]?.title || '');

	const handleToggle = (title: string) => {
		setSelectedCaderno(title);
		onCadernoChange(title);
	};

	return (
		<StyledToggleContainer>
			{cadernos.map((caderno) => (
				<StyledToggleItem
					key={caderno.id}
					selected={caderno.title === selectedCaderno}
					onClick={() => handleToggle(caderno.title)}>
					<Image
						src='/Icons/pencil-Icon.svg'
						alt='Ícone do lápis'
						width={16}
						height={16}
					/>
					<Typography>{caderno.title}</Typography>
				</StyledToggleItem>
			))}
		</StyledToggleContainer>
	);
}
