import styled from "styled-components";
import Navigation from "./Navigation";
import Container from "./Container";
import Button from "./UI/Button";

const HeaderStyle = styled.header`
	position: relative;
	padding: 3rem 1.8rem;
	min-height: 35rem;
	background: linear-gradient(124.41deg, #0188c2 1.66%, #057871 100%);

	.img-absolute {
		position: absolute;
		bottom: -30px;
		right: 0;
		width: 25rem;
	}
	.tag-line {
		color: var(--ctaColor);
		font-size: 0.8rem;
		letter-spacing: 0.5px;
		font-style: normal;
		font-weight: normal;
	}
	.title {
		font-size: var(--mobile-heading);
		color: var(--text-color-bright);
		font-family: var(--display-font);
		letter-spacing: 1.3px;
		margin-top: 0.3rem;
		padding-right: 10rem;
		line-height: 1.3;
		font-style: normal;
		font-weight: normal;
	}
	.hero-content {
		margin-top: 5rem;
	}
	.paragraph {
		width: 100%;
		margin-top: 1rem;
		font-size: 0.8rem;
		color: var(--text-color-bright);
		line-height: 1.8;
		white-space: pre-line;
		font-style: normal;
		font-weight: normal;
	}
	.paragraph span {
		display: block;
	}
`;

const Header = () => {
	return (
		<HeaderStyle>
			<Container>
				<Navigation />
				<div className="hero-content">
					<p className="tag-line">Your New Favourite Cleaners</p>
					<h1 className="title">Enjoy the feeling of cleanliness !</h1>
					<p className="paragraph">
						<span>Lorem ipsum dolor sit amet</span>
						<span>consectetur adipiscing elit.</span>
						<span>Quis eget neque malesuada integer vitae..</span>
					</p>
				</div>
				<Button margin="2rem 0 0 0">Book Now</Button>
			</Container>

			<img
				className="img-absolute"
				src="/images/mobile/hero--mobile.png"
				alt="hero maid"
			/>
		</HeaderStyle>
	);
};

export default Header;
