import React from 'react';
import Head from 'next/head';
import { Header } from '../components/common/Header';
import { Home } from '@/components/Home';

const HomePage: React.FC = () => {
	return (
		<>
			<Head>
				<title>Caderno de Questões | Estudologia</title>
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
			<Header />
			<main>
				<Home />
			</main>
		</>
	);
};

export default HomePage;
