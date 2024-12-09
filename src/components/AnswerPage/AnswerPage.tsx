import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Modal } from '@mui/material';
import questions from '../../data/questions.json';
import { TextAnswerArea } from '../common/TextAnswerArea/TextAnswerArea';
import { SendAnswerButton } from '../common/SendAnswerButton/SendAnswerButton';
import { Timer } from '../common/Timer/Timer';
import { Header } from '../common/Header';
import Head from 'next/head';

import {
	AnswerPageTitle,
	AnswerSubTitle,
	ButtonNext,
	ButtonPrevious,
	ContainerBox,
	SectionBottomContainer,
	SectionMiddleWrapper,
	SectionTop,
	SectionTopWrapper,
} from './styles';
import { SucessModal } from '../SucessModal/SucessModal';

export function AnswerPage() {
	const router = useRouter();
	const { id } = router.query;

	const currentIndex = questions.findIndex((q) => q.id === Number(id));
	const question = questions[currentIndex];

	const [answer, setAnswer] = useState<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		if (question) {
			const savedAnswer = localStorage.getItem(`answer-${question.id}`);
			setAnswer(savedAnswer || '');
		}
	}, [question]);

	const handleNavigation = (direction: 'next' | 'previous') => {
		if (direction === 'next' && currentIndex < questions.length - 1) {
			router.push(`/questao/${questions[currentIndex + 1].id}`);
		} else if (direction === 'previous' && currentIndex > 0) {
			router.push(`/questao/${questions[currentIndex - 1].id}`);
		}
	};

	const handleSaveAnswer = () => {
		if (question) {
			localStorage.setItem(`answer-${question.id}`, answer);
		}
	};

	if (!question) {
		return (
			<>
				<Header />
				<Box sx={{ padding: '20px' }}>
					<Button
						variant='contained'
						onClick={() => router.push('/')}>
						Voltar
					</Button>
				</Box>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>{question.titleCard} | Estudologia</title>
				<meta
					name='description'
					content='Gerencie seu caderno de questões de forma eficiente e intuitiva.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta charSet='UTF-8' />
				<link
					rel='icon'
					type='image/svg+xml'
					href='/Icons/logo-icon.svg'
				/>
			</Head>
			<Header isAnswerPage />
			<SectionTop>
				<SectionTopWrapper>
					<Timer questionId={question.id} />
				</SectionTopWrapper>
			</SectionTop>
			<ContainerBox>
				<div className='title__div'>
					<Image
						src='/Icons/pencil-Icon.svg'
						alt='Ícone do lápis'
						width={18}
						height={18}
					/>
					<AnswerPageTitle gutterBottom>{question.titleCard}</AnswerPageTitle>
				</div>
				<SectionMiddleWrapper>
					<AnswerSubTitle
						variant='h4'
						gutterBottom>
						{question.title}
					</AnswerSubTitle>
					<Typography
						variant='body1'
						sx={{ color: '#000000', fontFamily: 'var(--font-chivo), sans-serif' }}
						gutterBottom>
						{question.body}
					</Typography>
				</SectionMiddleWrapper>
				<Box>
					<TextAnswerArea
						value={answer}
						onChange={setAnswer}
					/>
				</Box>
				<Box sx={{ margin: '40px 0 35px' }}>
					<SendAnswerButton
						answer={answer}
						questionId={question.id}
						isLastQuestion={currentIndex === questions.length - 1}
					/>
				</Box>
				<SectionBottomContainer
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<div className='button__wrapper'>
						<ButtonPrevious
							variant='outlined'
							sx={{
								display: currentIndex === 0 ? 'none' : 'inline-flex',
							}}
							onClick={() => {
								handleSaveAnswer();
								handleNavigation('previous');
							}}>
							<Image
								src='/Icons/arrow-icon.svg'
								alt='Seta anterior'
								width={16}
								height={10}
							/>
							Anterior
						</ButtonPrevious>

						<ButtonNext
							variant='outlined'
							sx={{
								display: currentIndex === questions.length - 1 ? 'none' : 'inline-flex',
							}}
							onClick={() => {
								handleSaveAnswer();
								handleNavigation('next');
							}}>
							Próxima
							<Image
								src='/Icons/arrow-icon.svg'
								alt='Seta próxima'
								width={16}
								height={10}
								style={{ transform: 'rotate(180deg)' }}
							/>
						</ButtonNext>
					</div>
				</SectionBottomContainer>
			</ContainerBox>

			<Modal
				open={showModal}
				onClose={() => setShowModal(false)}>
				<SucessModal />
			</Modal>
		</>
	);
}
