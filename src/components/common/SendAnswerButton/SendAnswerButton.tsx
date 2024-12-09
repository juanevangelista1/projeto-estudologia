import React from 'react';
import { useRouter } from 'next/router';
import { StyledButton } from './styles';

interface SendAnswerButtonProps {
	answer: string;
	questionId: number;
	isLastQuestion: boolean;
}

export function SendAnswerButton({ answer, questionId, isLastQuestion }: SendAnswerButtonProps) {
	const router = useRouter();

	const handleSaveAnswer = () => {
		if (!answer) {
			alert('Por favor, escreva uma resposta antes de enviar!');
			return;
		}

		const existingAnswers: { questionId: number; answer: string }[] = JSON.parse(
			localStorage.getItem('answers') || '[]'
		);

		const updatedAnswers = [
			...existingAnswers.filter((item) => item.questionId !== questionId),
			{ questionId, answer },
		];

		localStorage.setItem('answers', JSON.stringify(updatedAnswers));

		if (isLastQuestion) {
			router.push('/success?tab=answers');
		} else {
			alert('Resposta salva com sucesso!');
		}
	};

	return (
		<StyledButton onClick={handleSaveAnswer}>
			{isLastQuestion ? 'Enviar resposta e finalizar' : 'Enviar resposta'}
		</StyledButton>
	);
}
