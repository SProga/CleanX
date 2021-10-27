import styled from "styled-components";

const ContainerStyle = styled.div`
	max-width: var(--max-width);
	margin: 0 auto;
	text-align: ${(props) => props.align || "initial"};
`;

const Container = ({ children, align }) => {
	return <ContainerStyle align={align}>{children}</ContainerStyle>;
};

export default Container;
