import styled from "styled-components";
import Container from "./Container";

const CompaniesStyled = styled.div`
	padding: 1rem 0;
	background: var(--text-color-secondary);
	box-shadow: inset 0px 0px 29px rgba(11, 63, 85, 0.25);
	height: 13rem;
	.title {
		font-size: 1.2rem;
		text-transform: uppercase;
		font-family: var(--display-font);
		letter-spacing: 2px;
		color: var(--primaryText);
	}
	.companies-icon {
		width: 6.4rem;
		height: 5.4rem;
	}
`;
const CompanyListStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 6rem;
`;

const Companies = () => {
	return (
		<CompaniesStyled>
			<Container align="center">
				<h2 className="title">Trusted Companies</h2>
				<svg className="companies-icon">
					<use xlinkHref="/images/numberCompanies.svg#numberCompanies"></use>
				</svg>
				<CompanyListStyles>
					<img src="/images/mobile/bitt--mobile.png" alt="" />
					<img src="/images/mobile/flow--mobile.png" alt="" />
					<img src="/images/mobile/scotiabank--mobile.png" alt="" />
					<img src="/images/mobile/chefette--mobile.png" alt="" />
				</CompanyListStyles>
			</Container>
		</CompaniesStyled>
	);
};

export default Companies;
