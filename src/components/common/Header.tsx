import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';

interface HeaderProps {
	isAnswerPage?: boolean;
}

export function Header({ isAnswerPage = false }: HeaderProps) {
	if (isAnswerPage) {
		return (
			<section className='header__container'>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
						borderBottom: '1px solid #DFE5F1',
						maxWidth: '1140px',
						width: '90%',
						margin: '0 auto',
					}}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<Link
							href='/'
							passHref>
							<Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
								<Image
									src='/Icons/logo-icon.svg'
									alt='Logo Estudologia'
									width={24}
									height={24}
								/>
								<Typography
									variant='h6'
									sx={{
										fontWeight: 'bold',
										color: '#141736',
										marginLeft: '8px',
										fontFamily: 'var(--font-chivo), sans-serif',
									}}>
									Estudologia
								</Typography>
							</Box>
						</Link>
					</Box>
				</Toolbar>
			</section>
		);
	}

	return (
		<section className='header__container'>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					borderBottom: '1px solid #DFE5F1',
				}}>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<IconButton>
						<Image
							src='/Icons/notification-icon.svg'
							alt='Ícone suas notificações'
							width={24}
							height={24}
						/>
					</IconButton>
					<IconButton>
						<Image
							src='/Icons/messages-icon.svg'
							alt='Ícone de mensagens'
							width={24}
							height={24}
						/>
					</IconButton>
					<IconButton sx={{ display: 'flex', gap: 1 }}>
						<Image
							src='/Icons/search-icon.svg'
							alt='Ícone da barra de pesquisa'
							width={24}
							height={24}
						/>
						<Typography
							sx={{ fontFamily: 'var(--font-chivo), sans-serif' }}
							color='#A5B4CB'>
							Pesquisar
						</Typography>
					</IconButton>
				</Box>
			</Toolbar>
		</section>
	);
}
