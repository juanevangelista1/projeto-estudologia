import '../styles/global.css'; // Corrige o caminho
import type { AppProps } from 'next/app';
import { Chivo } from 'next/font/google';

const chivo = Chivo({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-chivo',
	display: 'swap',
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<div className={chivo.className}>
			<Component {...pageProps} />
		</div>
	);
};

export default App;
