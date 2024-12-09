import React, { useState } from 'react';
import { Box } from '@mui/material';
import {
	BoxContainer,
	StyledAnswerText,
	StyledContainer,
	StyledQuestionTitle,
	StyledSeparator,
} from './styles';
import questions from '../../data/questions.json';
import { AnswerListToggle } from '../common/AnswerListToggle/AnswerListToggle';

export function AnswerList() {
	const [currentCaderno, setCurrentCaderno] = useState<string | null>(null);

	const answers = JSON.parse(localStorage.getItem('answers') || '[]') as {
		questionId: number;
		answer: string;
	}[];

	const cadernos = Array.from(new Set(questions.map((q) => q.titleCard))).map((titleCard) => ({
		id: titleCard,
		title: titleCard,
	}));

	return (
		<BoxContainer>
			<AnswerListToggle
				cadernos={cadernos}
				onCadernoChange={(title) => setCurrentCaderno(title)}
			/>

			<StyledContainer>
				{answers
					.filter((answer) => {
						if (!currentCaderno) return true;

						const question = questions.find((q) => q.id === answer.questionId);
						return question && question.titleCard === currentCaderno;
					})
					.map((answer, index) => {
						const question = questions.find((q) => q.id === answer.questionId);
						return (
							<Box key={answer.questionId}>
								<StyledQuestionTitle>{question?.title}</StyledQuestionTitle>
								<StyledAnswerText>Resposta:</StyledAnswerText>
								<StyledAnswerText>{answer.answer}</StyledAnswerText>

								{index < answers.length - 1 && <StyledSeparator />}
							</Box>
						);
					})}
			</StyledContainer>
		</BoxContainer>
	);
}
