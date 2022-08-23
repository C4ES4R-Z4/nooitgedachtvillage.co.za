import Header from "./components/Header";
import { NewDevelopments } from "./components/NewDevelopments";
import Row from "./components/Row";

function Ownership() {
	return <div>Property Developments by Remey Construction.</div>;
}

export default function Home() {
	return (
		<div>
			<Header />
			<Row />
			<NewDevelopments />
		</div>
	);
}
