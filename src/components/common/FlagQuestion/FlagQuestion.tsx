import React from 'react';
import { StyledBox, StyledText } from './StyledFlagQuestion';

interface FlagQuestionProps {
	isAnswered: boolean;
}

export function FlagQuestion({ isAnswered }: FlagQuestionProps) {
	return (
		<StyledBox
			sx={{
				display: 'flex',
				alignItems: 'center',
				padding: '4px 8px',
				borderRadius: '8px',
				justifyContent: 'center',
				backgroundColor: isAnswered ? '#e1f5d5' : '#fff8e4',
			}}>
			<StyledText
				variant='body2'
				sx={{ fontWeight: 'bold', color: isAnswered ? '#219653' : '#E99A00' }}>
				{isAnswered ? 'Respondido' : 'Não respondido'}
			</StyledText>
		</StyledBox>
	);
}
