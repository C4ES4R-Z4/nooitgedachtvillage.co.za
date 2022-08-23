import Header from "./components/Header";
import { NewDevelopments } from "./components/NewDevelopments";
import Row from "./components/Row";

export default function Home() {
	return (
		<div>
			<Header />
			<Row />
			<NewDevelopments />
		</div>
	);
}
