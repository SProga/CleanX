import styled from "styled-components";
import Container from "./Container";
import IndustryIcon from "./Icons/IndustryIcon";
import Button from "./UI/Button";

const ServicesStyles = styled.section`
	padding: 0 4rem;
	padding-top: 1.2rem;

	.title {
		color: var(--secondary-color);
		text-align: center;
		font-family: var(--display-font);
		font-weight: normal;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sub-title {
		color: var(--primaryText);
		font-size: 2rem;
		margin-top: 1rem;
	}
	.paragraph {
		font-size: 1.2rem;
		line-height: var(--paragraph-text);
		color: var(--text-color-primary);
	}
	.services__group {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: repeat(2, 50px);
		height: 5rem;
		justify-items: center;
	}
	.services__description {
		width: 100%;
		margin-top: 5rem;
		height: 400px;
	}
	.services__group h4 {
		font-family: var(--display-font);
		text-align: left;
		font-weight: normal;
		font-size: 1.2rem;
	}
	.services__group p {
		margin-top: 0.2rem;
		line-height: var(--paragraph-text);
	}
`;

const ImageStyles = styled.img`
	margin-top: 2rem;
`;

const ServicesDescriptionStyles = styled.div`
	text-align: left;
	justify-self: flex-start;
`;

const outlineButton = {
	backgroundColor: "transparent",
	border: "1px solid var(--secondary-color-lighter)",
	color: "var(--secondary-color-lighter)",
}; //button with no background

const Services = () => {
	return (
		<ServicesStyles>
			<Container>
				<div className="content">
					<h1 className="title">Our Services</h1>
					<ImageStyles
						src="/images/mobile/services--mobile.png"
						alt="our services photo"
					/>
					<h2 className="sub-title">
						Providing the best service at unbeatable prices.
					</h2>
					<p className="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
						aliquam repellat veritatis exercitationem consequatur neque eaque
						perferendis officiis quod.
					</p>
					<Button custom={outlineButton} margin="2rem 0 0 0">
						view all services
					</Button>

					<div className="services__description">
						<div className="services__group">
							<IndustryIcon />
							<ServicesDescriptionStyles>
								{/* TO GO INTO KEYSTONE */}
								<h4>Residential Cleaning</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Facilisi sem elit viverra adipiscing nisi, interdum.
								</p>
							</ServicesDescriptionStyles>
						</div>
					</div>
				</div>
			</Container>
		</ServicesStyles>
	);
};

export default Services;
