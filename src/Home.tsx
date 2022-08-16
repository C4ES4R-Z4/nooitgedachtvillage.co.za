import Header from "./components/Header";
import Hero from "./components/Hero";
import { NewDevelopments } from "./components/NewDevelopments";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <NewDevelopments />
        </div>
    );
}
