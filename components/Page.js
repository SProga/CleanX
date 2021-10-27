import GlobalStyles from "../styles/GlobalStyles";

export default function Page({ children }) {
	return (
		<>
			<GlobalStyles />
			{children}
		</>
	);
}
