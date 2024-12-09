import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { QuestionCard } from './QuestionCard/QuestionCard';
import { FilterCheckbox } from './common/CheckBox/CheckBox';
import { AnswerList } from './AnswerList/AnswerList';
import { SelectedButton } from './common/SelectedButton';

export function Home() {
	const [selectedTab, setSelectedTab] = useState<'questions' | 'answers'>('questions');
	const [showUnanswered, setShowUnanswered] = useState(false); // Controle do filtro
	const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]); // Inicializa com uma lista vazia

	// Use `useEffect` para acessar o `localStorage` apenas no cliente
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedAnswers = JSON.parse(localStorage.getItem('answers') || '[]');
			const questionIds = storedAnswers.map((answer: { questionId: number }) => answer.questionId);
			setAnsweredQuestions(questionIds);
		}
	}, []);

	return (
		<Box sx={{ padding: '20px' }}>
			{/* Componente de alternância de abas */}
			<SelectedButton
				selectedTab={selectedTab}
				onTabChange={setSelectedTab}
			/>

			{selectedTab === 'questions' && (
				<>
					{/* Checkbox para filtrar questões não respondidas */}
					<FilterCheckbox
						showUnanswered={showUnanswered}
						setShowUnanswered={setShowUnanswered}
					/>
					<Box sx={{ display: 'flex', margin: '20px auto', maxWidth: '1240px' }}>
						{/* Renderiza o QuestionCard com base no filtro */}
						<QuestionCard
							showUnanswered={showUnanswered}
							answeredQuestions={answeredQuestions}
						/>
					</Box>
				</>
			)}

			{selectedTab === 'answers' && (
				<Box sx={{ padding: '20px', marginTop: '20px' }}>
					<AnswerList />
				</Box>
			)}
		</Box>
	);
}
