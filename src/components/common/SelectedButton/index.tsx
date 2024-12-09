import { StyledBox, StyledTexButton } from './StyledSelectedButton';

interface SelectedButtonProps {
	selectedTab: 'questions' | 'answers';
	onTabChange: (tab: 'questions' | 'answers') => void;
}

export function SelectedButton({ selectedTab, onTabChange }: SelectedButtonProps) {
	return (
		<StyledBox>
			<StyledTexButton
				className={selectedTab === 'questions' ? 'selected' : ''}
				onClick={() => onTabChange('questions')}>
				Questões
			</StyledTexButton>

			<StyledTexButton
				className={selectedTab === 'answers' ? 'selected' : ''}
				onClick={() => onTabChange('answers')}>
				Respostas
			</StyledTexButton>
		</StyledBox>
	);
}
