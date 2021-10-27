import Companies from "../components/Companies";
import Header from "../components/Header";
import Main from "../components/Main";
import Services from "../components/Services";

export default function Home() {
	return (
		<div>
			<Header />
			<Main>
				<Companies />
				<Services />
			</Main>
		</div>
	);
}
