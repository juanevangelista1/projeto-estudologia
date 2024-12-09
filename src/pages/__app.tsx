import React from 'react';
import type { AppProps } from 'next/app';
import { Chivo } from '@next/font/google';
import '../styles/globals.css';

const chivo = Chivo({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-chivo',
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<div className={chivo.className}>
			<Component {...pageProps} />
		</div>
	);
};

export default App;
