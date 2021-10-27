import styled from "styled-components";

const ButtonStyled = styled.button`
	cursor: pointer;
	padding: 0.8rem 4rem;
	border: none;
	background-color: var(--ctaColor);
	border-radius: 10px 30px;
	color: var(--primaryText);
	font-size: 1.2rem;
	font-weight: 600;
	margin: ${(props) => props.margin || "initial"};
`;

const Button = ({ type, children, margin }) => {
	return (
		<ButtonStyled type={type || "text"} margin={margin}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
