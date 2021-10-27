import styled from "styled-components";
import Logo from "./Logo";
import BurgerMenu from "./UI/BurgerMenu";

const NavStyles = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Navigation = () => {
	return (
		<NavStyles>
			<Logo />
			<BurgerMenu />
		</NavStyles>
	);
};

export default Navigation;
