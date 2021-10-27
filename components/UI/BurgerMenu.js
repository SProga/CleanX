import styled from "styled-components";

const MenuButtonStyles = styled.button`
	cursor: pointer;
	border: none;
	background-color: transparent;

	span {
		display: block;
		position: relative;
		height: 2px;
		width: 26px;
		background-color: var(--text-color-bright);
		border-radius: 3px;
	}
	span::before {
		content: "";
		display: block;
		position: absolute;
		height: 100%;
		width: 21px;
		right: 0;
		top: -8px;
		background-color: var(--text-color-bright);
		border-radius: 3px;
	}
	span::after {
		content: "";
		display: block;
		position: absolute;
		height: 100%;
		width: 39px;
		right: 0;
		top: 8px;
		background-color: var(--text-color-bright);
		border-radius: 3px;
	}
`;

const BurgerMenu = () => {
	return (
		<MenuButtonStyles>
			<span></span>
			<span className="sr-only">Toggle Navigation</span>
		</MenuButtonStyles>
	);
};

export default BurgerMenu;
