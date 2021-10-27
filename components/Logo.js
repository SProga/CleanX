import Link from "next/link";
import styled from "styled-components";

const LogoStyle = styled.img`
	width: 86px;
`;

export default function Logo() {
	return (
		<Link href="/">
			<LogoStyle src="/images/logo.svg"></LogoStyle>
		</Link>
	);
}
