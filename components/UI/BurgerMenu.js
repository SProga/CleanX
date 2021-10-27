import styled from "styled-components";
import { useState } from "react";

const MenuButtonStyles = styled.button`
	cursor: pointer;
	border: none;
	background-color: transparent;
	padding: 1rem;

	span {
		display: block;
		position: relative;
		height: 2px;
		width: 26px;
		background-color: var(--text-color-bright);
		border-radius: 3px;
		cursor: pointer;
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
		transition: all 0.15s linear;
		transform-origin: center;
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
		transition: all 0.15s linear;
	}
	.open::before {
		transform: rotate(45deg) translate(16px, 11px);
		transform-origin: top right;
		width: 32px;
	}
	.open::after {
		transform: rotate(-45deg) translate(7px, 10px);
		transform-origin: bottom left;
		width: 32px;
	}
	.open {
		background-color: transparent;
	}
`;

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	return (
		<MenuButtonStyles onClick={toggleModal}>
			<span className={isOpen ? "open" : ""}></span>
			<span className="sr-only">Toggle Navigation</span>
		</MenuButtonStyles>
	);
};

export default BurgerMenu;
