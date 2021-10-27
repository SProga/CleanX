import Companies from "../components/Companies";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
	return (
		<div>
			<Header />
			<Main>
				<Companies></Companies>
			</Main>
		</div>
	);
}
