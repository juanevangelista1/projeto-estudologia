import React from 'react';
import { useRouter } from 'next/router'; // Importar o roteamento do Next.js
import { StyledButton } from './styles';

interface SendAnswerButtonProps {
	answer: string;
	questionId: number;
	isLastQuestion: boolean; // Nova propriedade para verificar se é a última pergunta
}

export function SendAnswerButton({ answer, questionId, isLastQuestion }: SendAnswerButtonProps) {
	const router = useRouter(); // Inicializar o roteador do Next.js

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
			// Redirecionar para a tela de sucesso
			router.push('/success');
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
