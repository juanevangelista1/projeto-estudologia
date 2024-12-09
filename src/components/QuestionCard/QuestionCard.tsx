/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import questions from '../../data/questions.json';
import { CustomButton } from '../common/AnswerButton/AnswerButton';
import { FlagQuestion } from '../common/FlagQuestion/FlagQuestion';
import { StyledCard, StyledCardContent, StyledTextCard, StyledTitleCard } from './StyledCard';
import { useRouter } from 'next/router';

interface Question {
	id: number;
	titleCard: string;
	title: string;
	questionNumber: string;
}

interface QuestionCardProps {
	showUnanswered: boolean;
	answeredQuestions: number[];
}

export function QuestionCard({ showUnanswered, answeredQuestions }: QuestionCardProps) {
	const router = useRouter();

	const handleNavigateToAnswer = (id: number) => {
		router.push(`/questao/${id}`);
	};

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
			{questions
				.filter((question) => {
					// Aplica o filtro baseado no estado do checkbox
					if (showUnanswered) {
						return !answeredQuestions.includes(question.id);
					}
					return true; // Exibe todas as questões se o filtro estiver desativado
				})
				.map((question) => (
					<StyledCard key={question.id}>
						<StyledCardContent>
							<div className='image__container'>
								<Image
									src='/Icons/pencil-Icon.svg'
									alt='Ícone do lápis'
									width={18}
									height={18}
								/>
							</div>
							<StyledTitleCard
								variant='h6'
								gutterBottom
								sx={{ fontWeight: 'bold' }}>
								{question.titleCard}
							</StyledTitleCard>
							{/* Passa o estado dinâmico para o FlagQuestion */}
							<FlagQuestion isAnswered={answeredQuestions.includes(question.id)} />
							<StyledTextCard
								gutterBottom
								sx={{ fontWeight: '400' }}>
								{question.questionNumber}
							</StyledTextCard>
							<CustomButton
								onClick={() => handleNavigateToAnswer(question.id)}
								isAnswered={answeredQuestions.includes(question.id)} // Verifica se a pergunta já foi respondida
							/>
						</StyledCardContent>
					</StyledCard>
				))}
		</Box>
	);
}
