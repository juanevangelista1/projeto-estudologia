import React from 'react';
import {
	StyledBox,
	StyledTextareaContainer,
	StyledTextarea,
	StyledCharacterCount,
} from './StyledTextAnswerArea';

interface TextAnswerAreaProps {
	value: string;
	onChange: (value: string) => void;
}

export function TextAnswerArea({ value, onChange }: TextAnswerAreaProps) {
	const maxLength = 300;

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value.length <= maxLength) {
			onChange(e.target.value);
		}
	};

	return (
		<StyledBox>
			<StyledTextareaContainer>
				<StyledTextarea
					placeholder='Escreva sua resposta aqui'
					value={value}
					onChange={handleTextChange}
				/>
				<StyledCharacterCount>
					{value.length}/{maxLength}
				</StyledCharacterCount>
			</StyledTextareaContainer>
		</StyledBox>
	);
}
