import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { QuestionCard } from './QuestionCard/QuestionCard';
import { FilterCheckbox } from './common/CheckBox/CheckBox';
import { AnswerList } from './AnswerList/AnswerList';
import { SelectedButton } from './common/SelectedButton';
import { HomeContainer } from './styles';

export function Home() {
	const router = useRouter();
	const { selectedTab } = router.query;

	const [currentTab, setCurrentTab] = useState<'questions' | 'answers'>('questions');
	const [showUnanswered, setShowUnanswered] = useState(false);
	const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

	useEffect(() => {
		if (!selectedTab) {
			router.replace('/?selectedTab=questions', undefined, { shallow: true });
		}
	}, [router, selectedTab]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedAnswers = JSON.parse(localStorage.getItem('answers') || '[]');
			const questionIds = storedAnswers.map((answer: { questionId: number }) => answer.questionId);
			setAnsweredQuestions(questionIds);
		}
	}, []);

	useEffect(() => {
		if (selectedTab && ['questions', 'answers'].includes(selectedTab as string)) {
			setCurrentTab(selectedTab as 'questions' | 'answers');
		}
	}, [selectedTab]);

	const handleTabChange = (tab: 'questions' | 'answers') => {
		setCurrentTab(tab);
		router.push(`/?selectedTab=${tab}`, undefined, { shallow: true });
	};

	return (
		<HomeContainer>
			<SelectedButton
				selectedTab={currentTab}
				onTabChange={handleTabChange}
			/>

			{currentTab === 'questions' && (
				<>
					<FilterCheckbox
						showUnanswered={showUnanswered}
						setShowUnanswered={setShowUnanswered}
					/>
					<Box sx={{ maxWidth: '970px' }}>
						<QuestionCard
							showUnanswered={showUnanswered}
							answeredQuestions={answeredQuestions}
						/>
					</Box>
				</>
			)}

			{currentTab === 'answers' && (
				<Box sx={{ padding: '20px', marginTop: '20px' }}>
					<AnswerList />
				</Box>
			)}
		</HomeContainer>
	);
}
