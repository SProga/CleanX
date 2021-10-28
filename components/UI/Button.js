import styled from "styled-components";

const ButtonStyled = styled.button`
	cursor: pointer;
	padding: 0.8rem 4rem;
	border: ${(props) => props.customStyles.border || "none"};
	background-color: ${(props) => props.customStyles.backgroundColor};
	border-radius: 10px 30px;
	color: ${(props) => props.customStyles.color || "var(--primaryText)"};
	font-size: 1.2rem;
	font-weight: 600;
	margin: ${(props) => props.margin || "initial"};
`;

const primary = {
	backgroundColor: `var(--ctaColor)`,
};

const Button = ({ type, children, margin, custom = null }) => {
	return (
		<ButtonStyled
			type={type || "text"}
			margin={margin}
			customStyles={custom || primary}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
