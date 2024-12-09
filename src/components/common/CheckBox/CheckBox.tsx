import React from 'react';
import { CheckBox, StyledFilterContainer, StyledFormControlLabel } from './StyledCheckBox';

interface FilterCheckboxProps {
	showUnanswered: boolean;
	setShowUnanswered: (value: boolean) => void;
}

export function FilterCheckbox({ showUnanswered, setShowUnanswered }: FilterCheckboxProps) {
	return (
		<StyledFilterContainer>
			<StyledFormControlLabel
				control={
					<CheckBox
						checked={showUnanswered}
						onChange={(e) => setShowUnanswered(e.target.checked)}
					/>
				}
				label='Mostrar apenas questões não respondidas'
			/>
		</StyledFilterContainer>
	);
}
