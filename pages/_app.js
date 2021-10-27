import Page from "../components/Page";
import "../styles/sr-only.css";

function MyApp({ Component, pageProps }) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}

export default MyApp;
