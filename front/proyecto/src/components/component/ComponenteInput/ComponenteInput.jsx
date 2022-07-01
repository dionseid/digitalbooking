import React from 'react';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { GrupoInput, IconoValidacion, Input, Label, ParrafoError } from '../../elementStyle/Form';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, parrafoError, expresionRegular,isDisabled, funcion}) => {
	const onChange = (e) => {
		const { value } = e.target
		
			cambiarEstado({ valido: value !== '' , campo: value});
		
		
	}

	const validacion = () => {
		
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
			cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoInput>
				<Input 
					disabled={isDisabled}
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.campo}
					onChange={onChange}
			
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
			<ParrafoError valido={estado.valido}>{parrafoError}</ParrafoError>
		</div>
	);
}
 
export default ComponenteInput;