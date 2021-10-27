import styled from "styled-components";
import Container from "./Container";

const CompaniesStyled = styled.div`
	padding: 1rem 0;
	background: var(--text-color-secondary);
	box-shadow: inset 0px 0px 29px rgba(11, 63, 85, 0.25);
	outline: none;

	.title {
		font-size: 1.2rem;
		text-transform: uppercase;
		font-family: var(--display-font);
		letter-spacing: 2px;
		color: var(--primaryText);
	}
	.companies-icon {
		margin-top: 0.4rem;
		width: 6.2rem;
		height: 5.2rem;
	}
	.companies-icon-sm {
		height: 35px;
	}
`;
const CompanyListStyles = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 3rem;
	width: 80%;
	margin: 0 auto;
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
					<img className="companies-icon-sm" src="/images/bitt.png" alt="" />
					<img className="companies-icon-sm" src="/images/flow.png" alt="" />
					<img
						className="companies-icon-sm"
						src="/images/scotiabank.png"
						alt=""
					/>
					<img
						className="companies-icon-sm"
						src="/images/chefette.png"
						alt=""
					/>
				</CompanyListStyles>
			</Container>
		</CompaniesStyled>
	);
};

export default Companies;
