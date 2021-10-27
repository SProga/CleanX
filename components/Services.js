import styled from "styled-components";
import Container from "./Container";

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
`;

const ImageStyles = styled.img`
	margin-top: 2rem;
`;

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
				</div>
			</Container>
		</ServicesStyles>
	);
};

export default Services;
