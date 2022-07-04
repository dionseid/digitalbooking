import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ED12D"
}

const Formulario = styled.form`
	display:flex;
	flex-direction: column;
	margin-bottom: 55px;
	margin-top: 70px;
	background-color:#f3f3f3;
`;

const Label = styled.label`
	margin-top:9px;
	padding: 10px;
	min-height: 40px;
	font-weight: 500;
	font-size: 12px;
	font-style: normal;
	
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	width: 100%;
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	background: #FFFFFF;
	box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	padding: 0px 10px 0px 20px;
	box-sizing: border-box;
	width: 100%;
	height: 35px;
	border:none;
	outline: none;
	width: 100%;
	opacity: 0.75;
	line-height: 35px;
	transition: .3s ease all;
	border: 3px solid transparent;
	&::placeholder{
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		opacity: 0.85;
	}
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
	}
	${props => props.valido === 'true' && css`
		border: 3px solid transparent;
	`}
	${props => props.valido === 'false' && css`
		border: 3px solid ${colores.error} !important;
	`}
`;

const ParrafoError = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	text-align: right;
	margin-bottom: 5px;
	color: ${colores.error};
	display: none;
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;


const ContenedorBotonCentrado = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 35px;
`;

const Boton = styled.button`
	margin-bottom:8px;
	background: #F0572D;
	color: #FFFFFF;
	font-style: normal;
	line-height: 19px;
	text-align: center;
	font-weight: 700px;
	font-size: 16px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
	width: 200px; 
	padding: 10px 20px 10px 20px;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
`;



const MensajeExito = styled.p`
	margin-top:10px;
	height: 45px;
	line-height: 45px;
	background: ${colores.exito};
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}	
	font-size: 14px;
	color: #191B1D;
`;

const MensajeError = styled.div`
	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	text-align:center;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	ParrafoError,
	IconoValidacion,
	ContenedorBotonCentrado,
	Boton,
	MensajeExito,
	MensajeError,

};