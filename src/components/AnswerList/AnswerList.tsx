import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledAnswerText, StyledContainer, StyledQuestionTitle, StyledSeparator } from './styles';
import questions from '../../data/questions.json'; // Importa o JSON de questões
import { AnswerListToggle } from '../common/AnswerListToggle/AnswerListToggle';

export function AnswerList() {
	// Estado para controlar qual caderno está selecionado (null para exibir tudo no início)
	const [currentCaderno, setCurrentCaderno] = useState<string | null>(null);

	// Recuperar respostas do localStorage
	const answers = JSON.parse(localStorage.getItem('answers') || '[]') as {
		questionId: number;
		answer: string;
	}[];

	// Obter a lista única de cadernos do JSON
	const cadernos = Array.from(
		new Set(questions.map((q) => q.titleCard)) // Extrai os títulos únicos dos cadernos
	).map((titleCard) => ({
		id: titleCard,
		title: titleCard, // O título é o próprio `titleCard`
	}));

	return (
		<Box>
			{/* Componente de alternância de cadernos */}
			<AnswerListToggle
				cadernos={cadernos}
				onCadernoChange={(title) => setCurrentCaderno(title)} // Atualiza o caderno selecionado
			/>

			{/* Renderizar respostas */}
			<StyledContainer>
				{answers
					.filter((answer) => {
						// Mostrar todas as respostas no primeiro carregamento
						if (!currentCaderno) return true;

						// Filtrar perguntas que pertencem ao caderno atual
						const question = questions.find((q) => q.id === answer.questionId);
						return question && question.titleCard === currentCaderno;
					})
					.map((answer) => {
						const question = questions.find((q) => q.id === answer.questionId);
						return (
							<Box key={answer.questionId}>
								<StyledQuestionTitle>{question?.title}</StyledQuestionTitle>
								<StyledAnswerText>Resposta:</StyledAnswerText>
								<StyledAnswerText>{answer.answer}</StyledAnswerText>
								<StyledSeparator />
							</Box>
						);
					})}
			</StyledContainer>
		</Box>
	);
}
